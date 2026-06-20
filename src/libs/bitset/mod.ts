import { Cursor } from "@hazae41/cursor";

export class Bitset {

  constructor(
    readonly number: number,
    readonly length: number
  ) { }

  size() {
    return this.length
  }

  write(cursor: Cursor) {
    const x = this.number
    const l = this.length

    for (let i = 0; i < l; i++)
      cursor.writeUint8((x >> (l - 1 - i)) & 1)

    return
  }

}