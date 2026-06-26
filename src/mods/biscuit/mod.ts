// deno-lint-ignore-file no-namespace
import { BCH } from "@/libs/bch/mod.ts";
import { Bitset } from "@/libs/bitset/mod.ts";
import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Caterpillar } from "@/mods/caterpillar/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Finder } from "@/mods/finder/mod.ts";
import { Timing } from "@/mods/timing/mod.ts";
import { Version } from "@/mods/version/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Biscuit {

  constructor(
    readonly content: Content
  ) { }

  encode() {
    const { version, correct } = this.content

    const length = 17 + (version.number * 4)

    const result = new Uint8Array(length * length)
    const matrix = new Uint8Matrix(result.buffer, length)

    Finder.TopLeft.write(matrix)
    Finder.TopRight.write(matrix)
    Finder.BottomLeft.write(matrix)

    Timing.Horizontal.write(matrix)
    Timing.Vertical.write(matrix)

    Dot.write(matrix)

    Preformat.write(matrix)

    new Version(version).write(matrix)

    new Caterpillar(this.content).write(matrix)

    Mask0.write(matrix)

    new Format(correct, 0).write(matrix)

    return matrix
  }

}

export namespace Dot {

  export function write(matrix: Uint8Matrix) {
    matrix.set(8, matrix.length - 8, 3)
  }

}

export namespace Preformat {

  export function write(matrix: Uint8Matrix) {
    for (let col = 0; col < 6; col++)
      matrix.set(col, 8, 3)

    matrix.set(7, 8, 3)
    matrix.set(8, 8, 3)
    matrix.set(8, 7, 3)

    for (let row = 5; row >= 0; row--)
      matrix.set(8, row, 3)

    for (let row = matrix.length - 1; row > matrix.length - 8; row--)
      matrix.set(8, row, 3)
    for (let col = matrix.length - 8; col < matrix.length; col++)
      matrix.set(col, 8, 3)

    return
  }

}

export class Format {

  constructor(
    readonly correct: 0 | 1 | 2 | 3,
    readonly pattern: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  ) { }

  write(matrix: Uint8Matrix) {
    const { correct, pattern } = this

    const cursor = new Cursor(new Uint8Array(15))

    if (correct === 0)
      new Bitset(0b01, 2).write(cursor)
    else if (correct === 1)
      new Bitset(0b00, 2).write(cursor)
    else if (correct === 2)
      new Bitset(0b11, 2).write(cursor)
    else if (correct === 3)
      new Bitset(0b10, 2).write(cursor)

    new Bitset(pattern, 3).write(cursor)

    cursor.write(BCH.N15K5.generate(cursor.before))

    const submask = new Uint8Array([1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0])

    for (let i = 0; i < 15; i++)
      cursor.bytes[i] ^= submask[i]

    cursor.offset = 0

    for (let col = 0; col < 6; col++)
      matrix.set(col, 8, cursor.readUint8() === 1 ? 3 : 2)

    matrix.set(7, 8, cursor.readUint8() === 1 ? 3 : 2)
    matrix.set(8, 8, cursor.readUint8() === 1 ? 3 : 2)
    matrix.set(8, 7, cursor.readUint8() === 1 ? 3 : 2)

    for (let row = 5; row >= 0; row--)
      matrix.set(8, row, cursor.readUint8() === 1 ? 3 : 2)

    cursor.offset = 0

    for (let row = matrix.length - 1; row > matrix.length - 8; row--)
      matrix.set(8, row, cursor.readUint8() === 1 ? 3 : 2)
    for (let col = matrix.length - 8; col < matrix.length; col++)
      matrix.set(col, 8, cursor.readUint8() === 1 ? 3 : 2)

    return
  }

}

export namespace Mask0 {

  export const pattern = 0

  export function write(matrix: Uint8Matrix) {
    const { length: width } = matrix

    for (let row = 0; row < width; row++) {
      for (let col = 0; col < width; col++) {
        const value = matrix.get(col, row)

        if (value > 1)
          continue

        if (((row + col) % 2) !== 0)
          continue

        matrix.set(col, row, value === 1 ? 0 : 1)
      }
    }

    return
  }

}
