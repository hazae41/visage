// deno-lint-ignore-file no-namespace

import { Matrix } from "@/mods/matrix/mod.ts";

export namespace Finder {

  export namespace TopLeft {

    export function write(matrix: Matrix) {
      // deno-lint-ignore prefer-const
      let x = 0, y = 0

      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.set(x, y++, new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))

      return
    }

  }

  export namespace TopRight {

    export function write(matrix: Matrix) {
      // deno-lint-ignore prefer-const
      let x = matrix.width - 8, y = 0

      matrix.set(x, y++, new Uint8Array([2, 3, 3, 3, 3, 3, 3, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 2, 2, 2, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 2, 2, 2, 2, 2, 3]))
      matrix.set(x, y++, new Uint8Array([2, 3, 3, 3, 3, 3, 3, 3]))
      matrix.set(x, y++, new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))

      return
    }

  }

  export namespace BottomLeft {

    export function write(matrix: Matrix) {
      // deno-lint-ignore prefer-const
      let x = 0, y = matrix.width - 8

      matrix.set(x, y++, new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))
      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.set(x, y++, new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))

      return
    }

  }

}