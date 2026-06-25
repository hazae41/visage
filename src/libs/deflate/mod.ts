/**
 * Deflate an Uint8Array of bits into an Uint8Array of bytes
 * @param bits 
 */
export function deflate(bits: Uint8Array) {
  const bytes = new Uint8Array(bits.length / 8)

  for (let i = 0; i < bytes.length; i++) {
    let byte = 0

    for (let j = 0; j < 8; j++)
      byte |= bits[i * 8 + j] << (7 - j)

    bytes[i] = byte
  }

  return bytes
}

export function inflate(bytes: Uint8Array) {
  const bits = new Uint8Array(bytes.length * 8)

  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i]

    for (let j = 0; j < 8; j++)
      bits[i * 8 + j] = (byte >> (7 - j)) & 1

    continue
  }

  return bits
}