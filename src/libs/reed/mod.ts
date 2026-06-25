// deno-lint-ignore-file no-namespace

import { GF256 } from "@/libs/gf256/mod.ts";

export namespace ReedSolomon {

  /**
   * Generate Reed-Solomon error correction bytes for the given data
   * @param message Bytes to generate error correction bytes for
   * @param length Number of error correction bytes to generate
   * @returns Generated error correction bytes
   */
  export function generate(message: Uint8Array, length: number) {
    let weights = new Uint8Array([1])

    for (let i = 0; i < length; i++)
      weights = GF256.polmul(weights, new Uint8Array([1, GF256.exp[i]]))

    const results = new Uint8Array(message.length + length)

    results.set(message)

    for (let i = 0; i < message.length; i++) {
      const coefficient = results[i]

      if (coefficient === 0)
        continue

      for (let j = 0; j < weights.length; j++)
        results[i + j] ^= GF256.mul(weights[j], coefficient)

      continue
    }

    return results.subarray(message.length)
  }

}