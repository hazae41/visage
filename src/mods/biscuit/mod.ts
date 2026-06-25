// deno-lint-ignore-file no-namespace

import { Mixture } from "@/mods/mixture/mod.ts";
import { Writable } from "@hazae41/binary";
import { Cursor } from "@hazae41/cursor";

export class Biscuit {

  readonly width: number

  constructor(
    readonly mixture: Mixture
  ) {
    this.width = 17 + (this.mixture.content.version.number * 4)
  }

  size() {
    return this.width * this.width
  }

  write(cursor: Cursor) {
    cursor.offset = cursor.length

    const matrix = new Matrix(cursor.bytes, this.width)

    Finder.TopLeft.write(matrix)
    Finder.TopRight.write(matrix)
    Finder.BottomLeft.write(matrix)

    Timing.Horizontal.write(matrix)
    Timing.Vertical.write(matrix)

    matrix.setUint8(8, matrix.width - 8, 1)

    new Zigzag(this.mixture).write(matrix)

    new Mask0().write(matrix)

  }

}

/**
 * Uint8Array but in two dimensions
 */
export class Matrix {

  constructor(
    readonly bytes: Uint8Array,
    readonly width: number
  ) { }

  getUint8(x: number, y: number) {
    return this.bytes[(y * this.width) + x]
  }

  setUint8(x: number, y: number, value: number) {
    this.bytes[(y * this.width) + x] = value
  }

  set(x: number, y: number, array: ArrayLike<number>) {
    this.bytes.set(array, (y * this.width) + x)
  }

  get(x: number, y: number, length: number) {
    return this.bytes.subarray((y * this.width) + x, (y * this.width) + x + length)
  }

  clone() {
    return new Matrix(new Uint8Array(this.bytes), this.width)
  }

}

export namespace Finder {

  export namespace TopLeft {

    export function write(matrix: Matrix) {
      // deno-lint-ignore prefer-const
      let x = 0, y = 0

      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.set(x, y++, new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))

      return
    }

  }

  export namespace TopRight {

    export function write(matrix: Matrix) {
      // deno-lint-ignore prefer-const
      let x = matrix.width - 8, y = 0

      matrix.set(x, y++, new Uint8Array([2, 3, 3, 3, 3, 3, 3, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 2, 2, 2, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 2, 2, 2, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 3, 3, 3, 3, 3, 3]))
      matrix.set(x, y++, new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))

      return
    }

  }

  export namespace BottomLeft {

    export function write(matrix: Matrix) {
      // deno-lint-ignore prefer-const
      let x = 0, y = matrix.width - 8

      matrix.set(x, y++, new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))
      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))

      return
    }

  }

}

export namespace Timing {

  export namespace Horizontal {

    export function write(matrix: Matrix) {
      const w = matrix.width - 8

      for (let i = 1, x = 8; x < w; i++, x++)
        matrix.setUint8(x, 6, i % 2 ? 3 : 2)

      return
    }

  }

  export namespace Vertical {

    export function write(matrix: Matrix) {
      const h = matrix.width - 8

      for (let i = 1, y = 8; y < h; i++, y++)
        matrix.setUint8(6, y, i % 2 ? 3 : 2)

      return
    }

  }

}

export class Zigzag {

  constructor(
    readonly mixture: Mixture
  ) { }

  write(matrix: Matrix) {
    const wrote = Writable.writeToBytes(this.mixture)

    let i = 0;

    for (let col = matrix.width - 1; col >= 1; col -= 2) {

      if (col === 6)
        col = 5

      for (let row = 0; row < matrix.width; row++) {
        const upward = ((col + 1) & 2) === 0

        for (let j = 0; j < 2; j++) {
          const x = col - j
          const y = upward ? matrix.width - 1 - row : row

          if (matrix.getUint8(x, y) > 1)
            continue

          matrix.setUint8(x, y, wrote[i++])

          if (i === wrote.length)
            return

          continue
        }
      }
    }
  }

}

export class Mask0 {

  write(matrix: Matrix) {
    const { width } = matrix

    for (let row = 0; row < width; row++) {
      for (let col = 0; col < width; col++) {
        const value = matrix.getUint8(col, row)

        if (value > 1)
          continue

        if (((row + col) % 2) !== 0)
          continue

        matrix.setUint8(col, row, value === 1 ? 0 : 1)
      }
    }

    return
  }

}