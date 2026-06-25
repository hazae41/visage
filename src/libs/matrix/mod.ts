/**
 * Uint8Array but in two dimensions
 */
export class Uint8Matrix<T extends ArrayBufferLike = ArrayBufferLike> {

  readonly #array: Uint8Array

  constructor(
    readonly buffer: T,
    readonly length: number
  ) {
    this.#array = new Uint8Array(buffer)
  }

  get(x: number, y: number) {
    return this.#array[(y * this.length) + x]
  }

  set(x: number, y: number, value: number) {
    this.#array[(y * this.length) + x] = value
  }

  subarray(x: number, y: number) {
    return this.#array.subarray((y * this.length) + x, ((y + 1) * this.length))
  }

}