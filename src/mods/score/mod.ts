// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/libs/matrix/mod.ts";

export namespace Score {

  export namespace Zero {

    export function score(matrix: Uint8Matrix) {
      let score = 0
      let count = 0

      /**
       * Vertical
       */

      count = 1

      for (let col = 0; col < matrix.length; col++) {
        for (let row = 1; row < matrix.length; row++) {
          const prev = matrix.get(col, row - 1) % 2
          const curr = matrix.get(col, row - 0) % 2

          if (curr === prev) {
            count++
            continue
          }

          score += count >= 5 ? (3 + (count - 5)) : 0

          count = 1

          continue
        }
      }

      score += count >= 5 ? (3 + (count - 5)) : 0

      /**
       * Horizontal
       */

      count = 1

      for (let row = 0; row < matrix.length; row++) {
        for (let col = 1; col < matrix.length; col++) {
          const prev = matrix.get(col - 1, row) % 2
          const curr = matrix.get(col - 0, row) % 2

          if (curr === prev) {
            count++
            continue
          }

          score += count >= 5 ? (3 + (count - 5)) : 0

          count = 1

          continue
        }
      }

      score += count >= 5 ? (3 + (count - 5)) : 0

      return score
    }

  }

}