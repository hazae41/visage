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

  get(col: number, row: number) {
    return this.#array[(row * this.length) + col]
  }

  set(col: number, row: number, value: number) {
    this.#array[(row * this.length) + col] = value
  }

  subarray(col: number, row: number) {
    return this.#array.subarray((row * this.length) + col, ((row + 1) * this.length))
  }

}