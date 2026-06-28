// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/libs/matrix/mod.ts";

export namespace Mask {

  export namespace Zero {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if (((row + col) % 2) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace One {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if ((row % 2) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace Two {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if ((col % 3) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace Three {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if (((row + col) % 3) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace Four {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if (((Math.floor(row / 2) + Math.floor(col / 3)) % 2) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace Five {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if (((row * col) % 2 + (row * col) % 3) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace Six {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if ((((row * col) % 2 + (row * col) % 3) % 2) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

  export namespace Seven {

    export function write(matrix: Uint8Matrix) {
      const { length } = matrix

      for (let col = 0; col < length; col++) {
        for (let row = 0; row < length; row++) {
          const value = matrix.get(col, row)

          if (value > 1)
            continue

          if ((((row + col) % 2 + (row * col) % 3) % 2) !== 0)
            continue

          matrix.set(col, row, value === 1 ? 0 : 1)
        }
      }

      return
    }

  }

}

export const masks = [
  Mask.Zero
]

export class MaskAndFormat {

  constructor(
    readonly correct: 0 | 1 | 2 | 3
  ) { }

  write(matrix: Uint8Matrix) {
    // deno-lint-ignore prefer-const no-unused-vars
    let score = 0

    for (let i = 0; i < masks.length; i++) {
      const dummy = new Uint8Matrix(matrix.buffer.slice(0), matrix.length)

      masks[i].write(dummy)

    }

    // new Format(this.correct, i).write(dummy)
  }

}