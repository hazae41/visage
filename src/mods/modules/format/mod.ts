// deno-lint-ignore-file no-namespace

import { BCH } from "@/libs/bch/mod.ts";
import { Bitset } from "@/libs/bitset/mod.ts";
import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { Cursor } from "@hazae41/cursor";

export namespace Preformat {

  export function write(matrix: Uint8Matrix) {
    for (let col = 0; col < 6; col++)
      matrix.set(col, 8, 3)

    matrix.set(7, 8, 3)
    matrix.set(8, 8, 3)
    matrix.set(8, 7, 3)

    for (let row = 5; row >= 0; row--)
      matrix.set(8, row, 3)

    for (let row = matrix.width - 1; row > matrix.width - 8; row--)
      matrix.set(8, row, 3)
    for (let col = matrix.width - 8; col < matrix.width; col++)
      matrix.set(col, 8, 3)

    return
  }

}

export class Format {

  constructor(
    readonly correct: 0 | 1 | 2 | 3,
    readonly pattern: number
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

    for (let row = matrix.width - 1; row > matrix.width - 8; row--)
      matrix.set(8, row, cursor.readUint8() === 1 ? 3 : 2)
    for (let col = matrix.width - 8; col < matrix.width; col++)
      matrix.set(col, 8, cursor.readUint8() === 1 ? 3 : 2)

    return
  }

}