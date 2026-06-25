import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Zigzag {

  constructor(
    readonly mixture: Mixture
  ) { }

  write(matrix: Uint8Matrix) {
    const cursor = new Cursor(this.mixture.encode())

    for (let col = matrix.length - 1; col >= 1; col -= 2) {
      if (col === 6)
        col = 5

      const upward = ((col + 1) & 2) === 0

      for (let row = 0; row < matrix.length; row++) {
        const y = upward ? matrix.length - 1 - row : row

        for (let i = 0; i < 2; i++) {
          const x = col - i

          if (matrix.get(x, y) > 1)
            continue

          matrix.set(x, y, cursor.readUint8())

          if (cursor.offset < cursor.length)
            continue

          break
        }
      }
    }
  }

}