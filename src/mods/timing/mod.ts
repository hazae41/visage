// deno-lint-ignore-file no-namespace

import { Matrix } from "@/mods/matrix/mod.ts";

export namespace Timing {

  export namespace Horizontal {

    export function write(matrix: Matrix) {
      const w = matrix.width - 8

      for (let i = 1, x = 8; x < w; i++, x++)
        matrix.setUint8(x, 6, i % 2 ? 3 : 2)

      return
    }

  }

  export namespace Vertical {

    export function write(matrix: Matrix) {
      const h = matrix.width - 8

      for (let i = 1, y = 8; y < h; i++, y++)
        matrix.setUint8(6, y, i % 2 ? 3 : 2)

      return
    }

  }

}