// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/libs/matrix/mod.ts";

export namespace Timing {

  export namespace Horizontal {

    export function write(matrix: Uint8Matrix) {
      const w = matrix.length - 8

      for (let i = 1, col = 8; col < w; i++, col++)
        matrix.set(col, 6, i % 2 ? 3 : 2)

      return
    }

  }

  export namespace Vertical {

    export function write(matrix: Uint8Matrix) {
      const h = matrix.length - 8

      for (let i = 1, row = 8; row < h; i++, row++)
        matrix.set(6, row, i % 2 ? 3 : 2)

      return
    }

  }

}