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
   * Generate Reed-Solomon error correction codewords for the given data
   * @param data Data to generate error correction codewords for
   * @param size Number of error correction codewords to generate
   * @returns Generated error correction codewords
   */
  export function generate(data: Uint8Array, size: number) {
    let generator = new Uint8Array([1])

    for (let i = 0; i < size; i++)
      generator = GF256.polmul(generator, new Uint8Array([1, GF256.exp[i]]))

    const message = new Uint8Array(data.length + size)

    message.set(data)

    for (let i = 0; i < data.length; i++) {
      const coefficient = message[i]

      if (coefficient === 0)
        continue

      for (let j = 0; j < generator.length; j++)
        message[i + j] ^= GF256.mul(generator[j], coefficient)

      continue
    }

    return message.subarray(data.length)
  }

}