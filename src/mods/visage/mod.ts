// deno-lint-ignore-file no-namespace

import { Bitset } from "@/libs/bitset/mod.ts";
import { Cursor } from "@hazae41/cursor";

export type Version = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
export type Correct = 0 | 1 | 2 | 3

export const codewordsByVersion: Record<Version, [number, number, number, number]> = {
  1: [19, 16, 13, 9],
  2: [34, 28, 22, 16],
  3: [55, 44, 34, 26],
  4: [80, 64, 48, 36],
  5: [108, 86, 62, 46],
  6: [136, 108, 76, 60],
  7: [156, 124, 88, 66],
  8: [194, 154, 110, 86],
  9: [232, 182, 132, 100],
  10: [274, 216, 154, 122],
  11: [324, 254, 180, 140],
  12: [370, 290, 206, 158],
  13: [428, 334, 244, 180],
  14: [461, 365, 261, 197],
  15: [523, 415, 295, 223],
  16: [589, 453, 325, 253],
  17: [647, 507, 367, 283],
  18: [721, 563, 397, 313],
  19: [795, 627, 445, 341],
  20: [861, 669, 485, 385],
  21: [932, 714, 512, 406],
  22: [1006, 782, 568, 442],
  23: [1094, 860, 614, 464],
  24: [1174, 914, 664, 514],
  25: [1276, 1000, 718, 538],
  26: [1370, 1062, 754, 596],
  27: [1468, 1128, 808, 628],
  28: [1531, 1193, 871, 661],
  29: [1631, 1267, 911, 701],
  30: [1735, 1373, 985, 745],
  31: [1843, 1455, 1033, 793],
  32: [1955, 1541, 1115, 845],
  33: [2071, 1631, 1171, 901],
  34: [2191, 1725, 1231, 961],
  35: [2306, 1812, 1286, 986],
  36: [2434, 1914, 1354, 1054],
  37: [2566, 1992, 1426, 1096],
  38: [2702, 2102, 1502, 1142],
  39: [2812, 2216, 1582, 1222],
  40: [2956, 2334, 1666, 1276]
} as const

export namespace Mode {

  export class Numeric {

    constructor(
      readonly content: string,
      readonly version: Version,
      readonly correct: Correct
    ) { }

    size() {
      const { version, correct } = this

      const codewords = codewordsByVersion[version][correct]

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b0001, 4).write(cursor)

      if (version < 10)
        new Bitset(content.length, 10).write(cursor)
      else if (version < 27)
        new Bitset(content.length, 12).write(cursor)
      else
        new Bitset(content.length, 14).write(cursor)

      for (let i = 0; i < content.length; i += 3) {
        const chunk = content.slice(i, i + 3)

        if (chunk.length === 3) {
          const x = parseInt(chunk)

          if (isNaN(x))
            throw new Error()

          new Bitset(x, 10).write(cursor)

          continue
        }

        if (chunk.length === 2) {
          const x = parseInt(chunk)

          if (isNaN(x))
            throw new Error()

          new Bitset(x, 7).write(cursor)

          break
        }

        if (chunk.length === 1) {
          const x = parseInt(chunk)

          if (isNaN(x))
            throw new Error()

          new Bitset(x, 4).write(cursor)

          break
        }

        break
      }

      const codewords = codewordsByVersion[version][correct]
      const remaining = (codewords * 8) - (cursor.offset - start)

      cursor.offset += Math.min(remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < (codewords * 8))
        new Bitset(0x11, 8).write(cursor)

      return
    }

  }

  export class Alphanumeric {

    readonly alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"

    constructor(
      readonly content: string,
      readonly version: Version,
      readonly correct: Correct
    ) { }

    size() {
      const { version, correct } = this

      const codewords = codewordsByVersion[version][correct]

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { alphabet, content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b0010, 4).write(cursor)

      if (version < 10)
        new Bitset(content.length, 9).write(cursor)
      else if (version < 27)
        new Bitset(content.length, 11).write(cursor)
      else
        new Bitset(content.length, 13).write(cursor)

      for (let i = 0; i < content.length; i += 2) {
        const chunk = content.slice(i, i + 2)

        if (chunk.length === 2) {
          const x = alphabet.indexOf(chunk[0])
          const y = alphabet.indexOf(chunk[1])

          if (x === -1)
            throw new Error()
          if (y === -1)
            throw new Error()

          new Bitset((x * 45) + y, 11).write(cursor)

          continue
        }

        if (chunk.length === 1) {
          const x = alphabet.indexOf(chunk[0])

          if (x === -1)
            throw new Error()

          new Bitset(x, 6).write(cursor)

          break
        }

        break
      }

      const codewords = codewordsByVersion[version][correct]
      const remaining = (codewords * 8) - (cursor.offset - start)

      cursor.offset += Math.min(remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < (codewords * 8))
        new Bitset(0x11, 8).write(cursor)

      return
    }

  }

  export class Byte {

    constructor(
      readonly content: Uint8Array,
      readonly version: Version,
      readonly correct: Correct
    ) { }

    size() {
      const { version, correct } = this

      const codewords = codewordsByVersion[version][correct]

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b0100, 4).write(cursor)

      if (version < 10)
        new Bitset(content.length, 8).write(cursor)
      else if (version < 27)
        new Bitset(content.length, 16).write(cursor)
      else
        new Bitset(content.length, 16).write(cursor)

      for (let i = 0; i < content.length; i++)
        new Bitset(content[i], 8).write(cursor)

      const codewords = codewordsByVersion[version][correct]
      const remaining = (codewords * 8) - (cursor.offset - start)

      cursor.offset += Math.min(remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < (codewords * 8))
        new Bitset(0x11, 8).write(cursor)

      return
    }

  }

  export class Kanji {

    constructor(
      readonly content: Array<number>,
      readonly version: Version,
      readonly correct: Correct
    ) { }

    size() {
      const { version, correct } = this

      const codewords = codewordsByVersion[version][correct]

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b1000, 4).write(cursor)

      if (version < 10)
        new Bitset(content.length, 8).write(cursor)
      else if (version < 27)
        new Bitset(content.length, 10).write(cursor)
      else
        new Bitset(content.length, 12).write(cursor)

      for (let i = 0; i < content.length; i++) {
        const c = content[i]

        if (c < 0x8140)
          throw new Error()
        if (c > 0x9FFC)
          throw new Error()

        if (c > 0xE040 && c < 0xEBBF)
          throw new Error()

        const r = c - (c < 0xE040 ? 0x8140 : 0xC140)

        const h = r >> 8
        const l = r & 0xFF

        new Bitset((h * 0xC0) + l, 13).write(cursor)
      }

      const codewords = codewordsByVersion[version][correct]
      const remaining = (codewords * 8) - (cursor.offset - start)

      cursor.offset += Math.min(remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < (codewords * 8))
        new Bitset(0x11, 8).write(cursor)

      return
    }

  }

}