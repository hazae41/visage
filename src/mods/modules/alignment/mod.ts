import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { PointInfo, VersionInfo } from "@/mods/modules/version/mod.ts";

export class Alignment {

  constructor(
    readonly version: VersionInfo
  ) { }

  write(matrix: Uint8Matrix) {
    const { aligns } = this.version

    const check = (center: PointInfo) => {
      for (let col = center.col - 2; col <= center.col + 2; col++)
        for (let row = center.row - 2; row <= center.row + 2; row++)
          if (matrix.get(col, row) > 1)
            return false
      return true
    }

    for (const center of aligns) {
      if (!check(center))
        continue

      matrix.subarray(center.col - 2, center.row - 2).set(new Uint8Array([3, 3, 3, 3, 3]))
      matrix.subarray(center.col - 2, center.row - 1).set(new Uint8Array([3, 2, 2, 2, 3]))
      matrix.subarray(center.col - 2, center.row + 0).set(new Uint8Array([3, 2, 3, 2, 3]))
      matrix.subarray(center.col - 2, center.row + 1).set(new Uint8Array([3, 2, 2, 2, 3]))
      matrix.subarray(center.col - 2, center.row + 2).set(new Uint8Array([3, 3, 3, 3, 3]))

      continue
    }

    return
  }

}