// deno-lint-ignore-file no-namespace

export namespace GF256 {

  export const exp = new Uint8Array(512)
  export const log = new Uint8Array(256)

  let x = 1

  for (let i = 0; i < 255; i++) {
    exp[i] = x
    log[x] = i

    x = (x << 1) ^ ((x >> 7) * 0x11D)
    x &= 0xff
  }

  for (let i = 255; i < 512; i++)
    exp[i] = exp[i - 255]

  export function mul(a: number, b: number) {
    if (a === 0)
      return 0
    if (b === 0)
      return 0
    return exp[log[a] + log[b]]
  }

  export function polmul(a: Uint8Array, b: Uint8Array) {
    const c = new Uint8Array(a.length + b.length - 1)

    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < b.length; j++)
        c[i + j] ^= mul(a[i], b[j])

    return c
  }

}

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