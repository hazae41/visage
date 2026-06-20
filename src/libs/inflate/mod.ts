/**
 * Inflate an Uint8Array of bytes into an Uint8Array of bits
 * @param bytes 
 * @returns 
 */
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