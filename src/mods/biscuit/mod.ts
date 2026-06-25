import { Finder } from "@/mods/finder/mod.ts";
import { Matrix } from "@/mods/matrix/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { Timing } from "@/mods/timing/mod.ts";
import { Zigzag } from "@/mods/zigzag/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Biscuit {

  readonly width: number

  constructor(
    readonly mixture: Mixture
  ) {
    this.width = 17 + (this.mixture.content.version.number * 4)
  }

  size() {
    return this.width * this.width
  }

  write(cursor: Cursor) {
    cursor.offset = cursor.length

    const matrix = new Matrix(cursor.bytes, this.width)

    Finder.TopLeft.write(matrix)
    Finder.TopRight.write(matrix)
    Finder.BottomLeft.write(matrix)

    Timing.Horizontal.write(matrix)
    Timing.Vertical.write(matrix)

    matrix.setUint8(8, matrix.width - 8, 1)

    new Zigzag(this.mixture).write(matrix)

    new Mask0().write(matrix)

  }

}

export class Mask0 {

  write(matrix: Matrix) {
    const { width } = matrix

    for (let row = 0; row < width; row++) {
      for (let col = 0; col < width; col++) {
        const value = matrix.getUint8(col, row)

        if (value > 1)
          continue

        if (((row + col) % 2) !== 0)
          continue

        matrix.setUint8(col, row, value === 1 ? 0 : 1)
      }
    }

    return
  }

}