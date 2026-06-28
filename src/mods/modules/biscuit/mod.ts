// deno-lint-ignore-file no-namespace
import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Alignment } from "@/mods/modules/alignment/mod.ts";
import { Caterpillar } from "@/mods/modules/caterpillar/mod.ts";
import { Content } from "@/mods/modules/content/mod.ts";
import { Finder } from "@/mods/modules/finder/mod.ts";
import { Preformat } from "@/mods/modules/format/mod.ts";
import { MaskAndFormat } from "@/mods/modules/mask/mod.ts";
import { Timing } from "@/mods/modules/timing/mod.ts";
import { Version } from "@/mods/modules/version/mod.ts";

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

    new MaskAndFormat(correct).write(matrix)

    return matrix
  }

}

export namespace Dark {

  export function write(matrix: Uint8Matrix) {
    matrix.set(8, matrix.length - 8, 3)
  }

}