// deno-lint-ignore-file no-namespace

import { Mixture } from "@/mods/mixture/mod.ts";
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
    const matrix = new Matrix(cursor.bytes, this.width)

    new Finder(0, 0).write(matrix)
    new Finder(this.width - 7, 0).write(matrix)
    new Finder(0, this.width - 7).write(matrix)

    Timing.Horizontal.write(matrix)
    Timing.Vertical.write(matrix)

    matrix.set(new Uint8Array([0]), 7, 7)

    cursor.offset = cursor.length
  }

}

/**
 * Uint8Array but in two dimensions
 */
export class Matrix {

  /**
   * Marks the bytes that have been written to
   */
  readonly burns: Uint8Array

  constructor(
    readonly bytes: Uint8Array,
    readonly width: number
  ) {
    this.burns = new Uint8Array(this.width * this.width)
  }

  /**
   * Set the byte at the given x and y coordinates
   * @param array 
   * @param x Width axis
   * @param y Height axis
   */
  set(array: ArrayLike<number>, x: number, y: number) {
    const offset = (y * this.width) + x

    this.bytes.set(array, offset)

    this.burns.fill(1, offset, offset + array.length)

    return
  }

}

/**
 * Two dimensional cursor
 */
export class Pattern {

  /**
   * Width axis
   */
  x = 0

  /**
   * Height axis
   */
  y = 0

  constructor(
    readonly matrix: Matrix
  ) { }

  /**
   * Write bytes to the matrix at the current cursor position
   * @param bytes 
   */
  set(bytes: Uint8Array) {
    this.matrix.set(bytes, this.x, this.y)
  }

  /**
   * Write bytes to the matrix and move the cursor down by one
   * @param bytes 
   */
  write(bytes: Uint8Array) {
    this.matrix.set(bytes, this.x, this.y++)
  }

}

export class Finder {

  constructor(
    /**
     * Width axis
     */
    readonly x: number,
    /**
     * Height axis
     */
    readonly y: number
  ) { }

  write(matrix: Matrix) {
    const pattern = new Pattern(matrix)

    pattern.x = this.x
    pattern.y = this.y

    pattern.write(new Uint8Array([1, 1, 1, 1, 1, 1, 1]))
    pattern.write(new Uint8Array([1, 0, 0, 0, 0, 0, 1]))
    pattern.write(new Uint8Array([1, 0, 1, 1, 1, 0, 1]))
    pattern.write(new Uint8Array([1, 0, 1, 1, 1, 0, 1]))
    pattern.write(new Uint8Array([1, 0, 1, 1, 1, 0, 1]))
    pattern.write(new Uint8Array([1, 0, 0, 0, 0, 0, 1]))
    pattern.write(new Uint8Array([1, 1, 1, 1, 1, 1, 1]))

    return
  }

}

export namespace Timing {

  export namespace Horizontal {

    export function write(matrix: Matrix) {
      const w = matrix.width - 8

      for (let i = 1, x = 8; x < w; i++, x++) {
        const pattern = new Pattern(matrix)

        pattern.x = x
        pattern.y = 6

        pattern.write(new Uint8Array([i % 2]))
      }

      return
    }

  }

  export namespace Vertical {

    export function write(matrix: Matrix) {
      const h = matrix.width - 8

      for (let i = 1, y = 8; y < h; i++, y++) {
        const pattern = new Pattern(matrix)

        pattern.x = 6
        pattern.y = y

        pattern.write(new Uint8Array([i % 2]))
      }

      return
    }

  }

}