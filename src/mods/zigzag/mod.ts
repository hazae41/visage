import { Matrix } from "@/mods/matrix/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { Writable } from "@hazae41/binary";

export class Zigzag {

  constructor(
    readonly mixture: Mixture
  ) { }

  write(matrix: Matrix) {
    const wrote = Writable.writeToBytes(this.mixture)

    let i = 0;

    for (let col = matrix.width - 1; col >= 1; col -= 2) {

      if (col === 6)
        col = 5

      for (let row = 0; row < matrix.width; row++) {
        const upward = ((col + 1) & 2) === 0

        for (let j = 0; j < 2; j++) {
          const x = col - j
          const y = upward ? matrix.width - 1 - row : row

          if (matrix.getUint8(x, y) > 1)
            continue

          matrix.setUint8(x, y, wrote[i++])

          if (i === wrote.length)
            return

          continue
        }
      }
    }
  }

}