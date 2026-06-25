// deno-lint-ignore-file no-namespace

import { Uint8Matrix } from "@/libs/matrix/mod.ts";

export namespace Timing {

  export namespace Horizontal {

    export function write(matrix: Uint8Matrix) {
      const w = matrix.length - 8

      for (let i = 1, x = 8; x < w; i++, x++)
        matrix.set(x, 6, i % 2 ? 3 : 2)

      return
    }

  }

  export namespace Vertical {

    export function write(matrix: Uint8Matrix) {
      const h = matrix.length - 8

      for (let i = 1, y = 8; y < h; i++, y++)
        matrix.set(6, y, i % 2 ? 3 : 2)

      return
    }

  }

}