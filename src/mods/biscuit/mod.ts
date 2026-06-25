import { BCH } from "@/libs/bch/mod.ts";
import { Bitset } from "@/libs/bitset/mod.ts";
import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Finder } from "@/mods/finder/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { Timing } from "@/mods/timing/mod.ts";
import { Zigzag } from "@/mods/zigzag/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Biscuit {

  readonly width: number

  constructor(
    readonly mixture: Mixture
  ) {
    this.width = 17 + (this.mixture.content.version.number * 4)
  }

  encode() {
    const result = new Uint8Array(this.width * this.width)
    const matrix = new Uint8Matrix(result, this.width)

    Finder.TopLeft.write(matrix)
    Finder.TopRight.write(matrix)
    Finder.BottomLeft.write(matrix)

    Timing.Horizontal.write(matrix)
    Timing.Vertical.write(matrix)

    matrix.setUint8(8, matrix.size - 8, 1)

    new Format(this.mixture.content.correct, 0).write(matrix)

    new Zigzag(this.mixture).write(matrix)

    new Mask0().write(matrix)

    new Format(this.mixture.content.correct, 0).write(matrix)

    return result
  }

}

export class Mask0 {

  write(matrix: Uint8Matrix) {
    const { size: width } = matrix

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

export class Format {

  constructor(
    readonly level: 0 | 1 | 2 | 3,
    readonly cover: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  ) { }

  write(matrix: Uint8Matrix) {
    const { level, cover } = this

    const format = new Cursor(new Uint8Array(5))

    if (level === 0)
      new Bitset(0b01, 2).write(format)
    else if (level === 1)
      new Bitset(0b00, 2).write(format)
    else if (level === 2)
      new Bitset(0b11, 2).write(format)
    else if (level === 3)
      new Bitset(0b10, 2).write(format)

    new Bitset(cover, 3).write(format)

    const formatWithErrorCorrection = new Cursor(new Uint8Array(15))
    formatWithErrorCorrection.write(format.bytes)
    formatWithErrorCorrection.write(BCH.N15.K5.generate(format.bytes))

    const mask = new Uint8Array([1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0])

    for (let i = 0; i < 15; i++)
      formatWithErrorCorrection.bytes[i] ^= mask[i]

    formatWithErrorCorrection.offset = 0

    for (let x = 0; x < 6; x++)
      matrix.setUint8(x, 8, formatWithErrorCorrection.readUint8() === 1 ? 3 : 2)
    for (let x = 7; x < 9; x++)
      matrix.setUint8(x, 8, formatWithErrorCorrection.readUint8() === 1 ? 3 : 2)
    for (let y = 7; y; y--)
      matrix.setUint8(8, y, formatWithErrorCorrection.readUint8() === 1 ? 3 : 2)

    formatWithErrorCorrection.offset = 0

    for (let y = matrix.size - 1; y > matrix.size - 8; y--)
      matrix.setUint8(8, y, formatWithErrorCorrection.readUint8() === 1 ? 3 : 2)
    for (let x = matrix.size - 8; x < matrix.size; x++)
      matrix.setUint8(x, 8, formatWithErrorCorrection.readUint8() === 1 ? 3 : 2)

    return
  }

}