// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/mods/matrix/mod.ts";

export namespace Score {

  export namespace One {

    export function score(matrix: Uint8Matrix) {
      let score = 0
      let count = 0

      /**
       * Vertical
       */

      count = 1

      for (let col = 0; col < matrix.width; col++) {
        for (let row = 1; row < matrix.width; row++) {
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

      for (let row = 0; row < matrix.width; row++) {
        for (let col = 1; col < matrix.width; col++) {
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

  export namespace Two {

    export function score(matrix: Uint8Matrix) {
      let score = 0

      for (let row = 0; row < matrix.width - 1; row++) {
        for (let col = 0; col < matrix.width - 1; col++) {
          const a = matrix.get(col + 0, row + 0) % 2
          const b = matrix.get(col + 1, row + 0) % 2
          const c = matrix.get(col + 0, row + 1) % 2
          const d = matrix.get(col + 1, row + 1) % 2

          if (a === b && a === c && a === d)
            score += 3

          continue
        }
      }

      return score
    }

  }

  export namespace Three {

    export function score(matrix: Uint8Matrix) {
      let score = 0

      /**
       * Vertical
       */

      for (let col = 0; col < matrix.width; col++) {
        for (let row = 0; row < matrix.width - 6; row++) {
          const a = matrix.get(col, row + 0) % 2
          const b = matrix.get(col, row + 1) % 2
          const c = matrix.get(col, row + 2) % 2
          const d = matrix.get(col, row + 3) % 2
          const e = matrix.get(col, row + 4) % 2
          const f = matrix.get(col, row + 5) % 2
          const g = matrix.get(col, row + 6) % 2

          if (a === 1 && b === 0 && c === 1 && d === 1 && e === 1 && f === 0 && g === 1)
            score += 40

          continue
        }
      }

      /**
       * Horizontal
       */

      for (let row = 0; row < matrix.width; row++) {
        for (let col = 0; col < matrix.width - 6; col++) {
          const a = matrix.get(col + 0, row) % 2
          const b = matrix.get(col + 1, row) % 2
          const c = matrix.get(col + 2, row) % 2
          const d = matrix.get(col + 3, row) % 2
          const e = matrix.get(col + 4, row) % 2
          const f = matrix.get(col + 5, row) % 2
          const g = matrix.get(col + 6, row) % 2

          if (a === 1 && b === 0 && c === 1 && d === 1 && e === 1 && f === 0 && g === 1)
            score += 40

          continue
        }
      }

      return score
    }

  }

  export namespace Four {

    export function score(matrix: Uint8Matrix) {
      let count = 0

      for (let col = 0; col < matrix.width; col++) {
        for (let row = 0; row < matrix.width; row++) {
          const value = matrix.get(col, row) % 2

          if (value === 1)
            count++

          continue
        }
      }

      const total = matrix.width * matrix.width
      const ratio = Math.floor((count * 100) / total)
      const delta = Math.abs(ratio - 50)
      const score = Math.floor(delta / 5) * 10

      return score
    }

  }

}