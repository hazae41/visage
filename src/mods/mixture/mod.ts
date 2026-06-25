import { Bitset } from "@/libs/bitset/mod.ts";
import { deflate } from "@/libs/deflate/mod.ts";
import { ReedSolomon } from "@/libs/reed/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Mixture {

  constructor(
    readonly content: Content
  ) { }

  encode() {
    const { content } = this

    const level = content.version.levels[content.correct]

    const wrote = new Cursor(content.encode())
    const mixed = new Cursor(new Uint8Array(content.version.length))

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
      const start = mixed.offset

      for (const data of datas)
        if (i < data.length)
          new Bitset(data[i], 8).write(mixed)

      if (mixed.offset === start)
        break

      continue
    }

    for (let i = 0; true; i++) {
      const start = mixed.offset

      for (const reed of reeds)
        if (i < reed.length)
          new Bitset(reed[i], 8).write(mixed)

      if (mixed.offset === start)
        break

      continue
    }

    return mixed.bytes
  }

}