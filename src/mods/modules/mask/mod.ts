// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { Format } from "@/mods/modules/format/mod.ts";
import { Score } from "@/mods/modules/score/mod.ts";

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

export class MaskAndFormat {

  constructor(
    readonly correct: 0 | 1 | 2 | 3
  ) { }

  write(matrix: Uint8Matrix) {
    let best: number | null = null
    let mask: Uint8Matrix | null = null

    for (let i = 0; i < MaskAndFormat.masks.length; i++) {
      const dummy = new Uint8Matrix(matrix.buffer.slice(0), matrix.length)

      new Format(this.correct, i).write(dummy)

      MaskAndFormat.masks[i].write(dummy)

      const a = Score.One.score(dummy)
      const b = Score.Two.score(dummy)
      const c = Score.Three.score(dummy)
      const d = Score.Four.score(dummy)

      const score = a + b + c + d

      if (best == null)
        best = score, mask = dummy
      if (score < best)
        best = score, mask = dummy

      continue
    }

    new Uint8Array(matrix.buffer).set(new Uint8Array(mask!.buffer))
  }

}

export namespace MaskAndFormat {

  export const masks = [
    Mask.Zero,
    Mask.One,
    Mask.Two,
    Mask.Three,
    Mask.Four,
    Mask.Five,
    Mask.Six,
    Mask.Seven
  ]

}