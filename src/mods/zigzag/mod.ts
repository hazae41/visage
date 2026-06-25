import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Zigzag {

  constructor(
    readonly mixture: Mixture
  ) { }

  write(matrix: Uint8Matrix) {
    const cursor = new Cursor(this.mixture.encode())

    for (let col = matrix.size - 1; col >= 1; col -= 2) {

      if (col === 6)
        col = 5

      for (let row = 0; row < matrix.size; row++) {
        const upward = ((col + 1) & 2) === 0

        for (let j = 0; j < 2; j++) {
          const x = col - j
          const y = upward ? matrix.size - 1 - row : row

          if (matrix.getUint8(x, y) > 1)
            continue

          matrix.setUint8(x, y, cursor.readUint8())

          if (cursor.offset === cursor.length)
            return

          continue
        }
      }
    }
  }

}