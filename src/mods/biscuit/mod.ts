// deno-lint-ignore-file no-namespace
import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Alignment } from "@/mods/alignment/mod.ts";
import { Caterpillar } from "@/mods/caterpillar/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Finder } from "@/mods/finder/mod.ts";
import { Format, Preformat } from "@/mods/format/mod.ts";
import { Timing } from "@/mods/timing/mod.ts";
import { Version } from "@/mods/version/mod.ts";

export class Biscuit {

  constructor(
    readonly content: Content
  ) { }

  encode() {
    const { version, correct } = this.content

    const length = 17 + (version.number * 4)

    const result = new Uint8Array(length * length)
    const matrix = new Uint8Matrix(result.buffer, length)

    Dark.write(matrix)

    Finder.TopLeft.write(matrix)
    Finder.TopRight.write(matrix)
    Finder.BottomLeft.write(matrix)

    Preformat.write(matrix)

    new Version(version).write(matrix)

    new Alignment(version).write(matrix)

    Timing.Horizontal.write(matrix)
    Timing.Vertical.write(matrix)

    new Caterpillar(this.content).write(matrix)

    Mask0.write(matrix)

    new Format(correct, 0).write(matrix)

    return matrix
  }

}

export namespace Dark {

  export function write(matrix: Uint8Matrix) {
    matrix.set(8, matrix.length - 8, 3)
  }

}

export namespace Mask0 {

  export const pattern = 0

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
