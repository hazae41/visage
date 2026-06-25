// deno-lint-ignore-file no-namespace prefer-const

import { Uint8Matrix } from "@/mods/matrix/mod.ts";

export namespace Finder {

  export namespace TopLeft {

    export function write(matrix: Uint8Matrix) {
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

    export function write(matrix: Uint8Matrix) {
      let x = matrix.size - 8, y = 0

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

    export function write(matrix: Uint8Matrix) {
      let x = 0, y = matrix.size - 8

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