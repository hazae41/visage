import { Bitset } from "@/libs/bitset/mod.ts";
import { ReedSolomon } from "@/libs/correct/mod.ts";
import { deflate } from "@/libs/deflate/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Writable } from "@hazae41/binary";
import { Cursor } from "@hazae41/cursor";

export class Bitstream {

  constructor(
    readonly content: Content
  ) { }

  size() {
    return this.content.version.length
  }

  write(cursor: Cursor) {
    const { content } = this

    const wrote = new Cursor(Writable.writeToBytes(content))
    const level = content.version.levels[content.correct]

    const datas = new Array<Uint8Array>()
    const reeds = new Array<Uint8Array>()

    for (const type of level.types) {
      for (let i = 0; i < type.count; i++) {
        const data = deflate(wrote.read(type.words.data * 8))
        const reed = ReedSolomon.generate(data, type.words.reed)

        datas.push(data)
        reeds.push(reed)

        continue
      }
    }

    for (let i = 0; true; i++) {
      const start = cursor.offset

      for (const data of datas)
        if (i < data.length)
          new Bitset(data[i], 8).write(cursor)

      if (cursor.offset === start)
        break

      continue
    }

    for (let i = 0; true; i++) {
      const start = cursor.offset

      for (const reed of reeds)
        if (i < reed.length)
          new Bitset(reed[i], 8).write(cursor)

      if (cursor.offset === start)
        break

      continue
    }

    return
  }

}