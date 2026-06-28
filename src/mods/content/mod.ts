// deno-lint-ignore-file no-namespace

import { Bitset } from "@/libs/bitset/mod.ts";
import { VersionInfo, versions } from "@/mods/version/mod.ts";
import { Cursor } from "@hazae41/cursor";

export type Content =
  | Content.Numeric
  | Content.Alphanumeric
  | Content.Byte
  | Content.Kanji

export namespace Content {

  export class Numeric {

    constructor(
      readonly content: string,
      readonly version: VersionInfo,
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    static from(content: string, correct: 0 | 1 | 2 | 3) {
      /**
       * Bruteforce to find the smallest version that can encode the content
       */

      for (const number in versions) {
        const version = versions[number]
        const encoder = new Numeric(content, version, correct)

        try {
          encoder.encode()
        } catch {
          continue
        }

        return encoder
      }

      throw new Error("Content too long for any version")
    }

    encode() {
      const { content, version, correct } = this

      const length = version.levels[correct].words.data
      const cursor = new Cursor(new Uint8Array(length * 8))

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

      cursor.offset += Math.min(cursor.remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < cursor.length)
        new Bitset(0x11, 8).write(cursor)

      return cursor.bytes
    }

  }

  export class Alphanumeric {

    readonly alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"

    constructor(
      readonly content: string,
      readonly version: VersionInfo,
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    static from(content: string, correct: 0 | 1 | 2 | 3) {
      /**
       * Bruteforce to find the smallest version that can encode the content
       */

      for (const number in versions) {
        const version = versions[number]
        const encoder = new Alphanumeric(content, version, correct)

        try {
          encoder.encode()
        } catch {
          continue
        }

        return encoder
      }

      throw new Error("Content too long for any version")
    }

    encode() {
      const { alphabet, content, version, correct } = this

      const length = version.levels[correct].words.data
      const cursor = new Cursor(new Uint8Array(length * 8))

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

      cursor.offset += Math.min(cursor.remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < cursor.length)
        new Bitset(0x11, 8).write(cursor)

      return cursor.bytes
    }

  }

  export class Byte {

    constructor(
      readonly content: Uint8Array,
      readonly version: VersionInfo,
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    static from(content: Uint8Array, correct: 0 | 1 | 2 | 3) {
      /**
       * Bruteforce to find the smallest version that can encode the content
       */

      for (const number in versions) {
        const version = versions[number]
        const encoder = new Byte(content, version, correct)

        try {
          encoder.encode()
        } catch {
          continue
        }

        return encoder
      }

      throw new Error("Content too long for any version")
    }

    encode() {
      const { content, version, correct } = this

      const length = version.levels[correct].words.data
      const cursor = new Cursor(new Uint8Array(length * 8))

      new Bitset(0b0100, 4).write(cursor)

      if (version.number < 10)
        new Bitset(content.length, 8).write(cursor)
      else if (version.number < 27)
        new Bitset(content.length, 16).write(cursor)
      else
        new Bitset(content.length, 16).write(cursor)

      for (let i = 0; i < content.length; i++)
        new Bitset(content[i], 8).write(cursor)

      cursor.offset += Math.min(cursor.remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < cursor.length)
        new Bitset(0x11, 8).write(cursor)

      return cursor.bytes
    }

  }

  export class Kanji {

    constructor(
      readonly content: Array<number>,
      readonly version: VersionInfo,
      readonly correct: 0 | 1 | 2 | 3
    ) { }

    static from(content: Array<number>, correct: 0 | 1 | 2 | 3) {
      /**
       * Bruteforce to find the smallest version that can encode the content
       */

      for (const number in versions) {
        const version = versions[number]
        const encoder = new Kanji(content, version, correct)

        try {
          encoder.encode()
        } catch {
          continue
        }

        return encoder
      }

      throw new Error("Content too long for any version")
    }

    encode() {
      const { content, version, correct } = this

      const length = version.levels[correct].words.data
      const cursor = new Cursor(new Uint8Array(length * 8))

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

      cursor.offset += Math.min(cursor.remaining, 4)
      cursor.offset += 8 - (cursor.offset % 8)

      new Bitset(0xEC, 8).write(cursor)

      while (cursor.offset < cursor.length)
        new Bitset(0x11, 8).write(cursor)

      return cursor.bytes
    }

  }

}