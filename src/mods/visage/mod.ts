// deno-lint-ignore-file no-namespace

import { Bitset } from "@/libs/bitset/mod.ts";
import { ReedSolomon } from "@/libs/correct/mod.ts";
import { deflate } from "@/libs/deflate/mod.ts";
import { inflate } from "@/libs/inflate/mod.ts";
import { Version } from "@/mods/versions/mod.ts";
import { Writable } from "@hazae41/binary";
import { Cursor } from "@hazae41/cursor";

export type Mode =
  | Mode.Numeric
  | Mode.Alphanumeric
  | Mode.Byte
  | Mode.Kanji

export namespace Mode {

  export class Numeric {

    constructor(
      readonly content: string,
      readonly version: Version,
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    size() {
      const { version, correct } = this

      const codewords = version.levels[correct].words

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b0001, 4).write(cursor)

      if (version.number < 10)
        new Bitset(content.length, 10).write(cursor)
      else if (version.number < 27)
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

      const codewords = version.levels[correct].words
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
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    size() {
      const { version, correct } = this

      const codewords = version.levels[correct].words

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { alphabet, content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b0010, 4).write(cursor)

      if (version.number < 10)
        new Bitset(content.length, 9).write(cursor)
      else if (version.number < 27)
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

      const codewords = version.levels[correct].words
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
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    size() {
      const { version, correct } = this

      const codewords = version.levels[correct].words

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b0100, 4).write(cursor)

      if (version.number < 10)
        new Bitset(content.length, 8).write(cursor)
      else if (version.number < 27)
        new Bitset(content.length, 16).write(cursor)
      else
        new Bitset(content.length, 16).write(cursor)

      for (let i = 0; i < content.length; i++)
        new Bitset(content[i], 8).write(cursor)

      const codewords = version.levels[correct].words
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
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    size() {
      const { version, correct } = this

      const codewords = version.levels[correct].words

      return codewords * 8
    }

    write(cursor: Cursor) {
      const { content, version, correct } = this

      const start = cursor.offset

      new Bitset(0b1000, 4).write(cursor)

      if (version.number < 10)
        new Bitset(content.length, 8).write(cursor)
      else if (version.number < 27)
        new Bitset(content.length, 10).write(cursor)
      else
        new Bitset(content.length, 12).write(cursor)

      for (let i = 0; i < content.length; i++) {
        const c = content[i]
        const r = c - (c < 0xE040 ? 0x8140 : 0xC140)

        const h = r >> 8
        const l = r & 0xFF

        new Bitset((h * 0xC0) + l, 13).write(cursor)
      }

      const codewords = version.levels[correct].words
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

export function encode(mode: Mode) {
  const wrote = new Cursor(Writable.writeToBytes(mode))
  const level = mode.version.levels[mode.correct]

  const datas = new Array<Uint8Array>()
  const reeds = new Array<Uint8Array>()

  let size = 0

  for (const block of level.block) {
    for (let i = 0; i < block.count; i++) {
      const data = deflate(wrote.read(block.words * 8))
      const reed = ReedSolomon.generate(data, level.fixes)

      datas.push(data)
      reeds.push(reed)

      size += data.length
      size += reed.length

      continue
    }
  }

  const final = new Cursor(new Uint8Array(size))

  for (let i = 0; true; i++) {
    const start = final.offset

    for (const data of datas)
      if (i < data.length)
        final.writeUint8(data[i])

    if (final.offset === start)
      break

    continue
  }

  for (let i = 0; true; i++) {
    const start = final.offset

    for (const reed of reeds)
      if (i < reed.length)
        final.writeUint8(reed[i])

    if (final.offset === start)
      break

    continue
  }

  return inflate(final.bytes)
}