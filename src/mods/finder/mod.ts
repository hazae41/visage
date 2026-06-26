// deno-lint-ignore-file no-namespace prefer-const

import { Uint8Matrix } from "@/libs/matrix/mod.ts";

export namespace Finder {

  export namespace TopLeft {

    export function write(matrix: Uint8Matrix) {
      let col = 0, row = 0

      matrix.subarray(col, row++).set(new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))

      return
    }

  }

  export namespace TopRight {

    export function write(matrix: Uint8Matrix) {
      let col = matrix.length - 8, row = 0

      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 3, 3, 3, 3, 3, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 2, 2, 2, 2, 2, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 2, 3, 3, 3, 2, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 2, 2, 2, 2, 2, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 3, 3, 3, 3, 3, 3, 3]))
      matrix.subarray(col, row++).set(new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))

      return
    }

  }

  export namespace BottomLeft {

    export function write(matrix: Uint8Matrix) {
      let col = 0, row = matrix.length - 8

      matrix.subarray(col, row++).set(new Uint8Array([2, 2, 2, 2, 2, 2, 2, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 3, 3, 3, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 2, 2, 2, 2, 2, 3, 2]))
      matrix.subarray(col, row++).set(new Uint8Array([3, 3, 3, 3, 3, 3, 3, 2]))

      return
    }

  }

}