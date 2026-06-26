// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Caterpillar {

  constructor(
    readonly mixture: Mixture
  ) { }

  write(matrix: Uint8Matrix) {
    const cursor = new Cursor(this.mixture.encode())

    for (const { x, y } of Caterpillar.walk(matrix)) {
      if (cursor.offset === cursor.length)
        break

      if (matrix.get(x, y) < 2)
        matrix.set(x, y, cursor.readUint8())

      continue
    }

    return
  }

}

export namespace Caterpillar {

  /**
   * Walks the matrix starting from the bottom right corner and alternating between going up and down the columns
   * @param matrix 
   * @returns 
   */
  export function* walk(matrix: Uint8Matrix) {
    /**
     * Columns are walked from right to left in pairs and skip the 6th column
     */
    for (let col = matrix.length - 1; col > 0; col = col === 8 ? 5 : col - 2) {
      /**
       * Rows are walked down or up depending on the column pair
       */
      for (let row = 0; row < matrix.length; row++) {
        /**
         * Columns are walked in pairs
         */
        for (let i = 0; i < 2; i++) {
          const x = col - i
          const y = ((col + 1) & 2) ? row : ((matrix.length - 1) - row)

          yield { x, y }

          continue
        }

        continue
      }

      continue
    }

    return
  }

}