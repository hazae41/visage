/**
 * Uint8Array but in two dimensions
 */
export class Uint8Matrix<T extends ArrayBufferLike = ArrayBufferLike> {

  constructor(
    readonly array: Uint8Array<T>,
    readonly width: number
  ) { }

  subarray(col: number, row: number) {
    return this.array.subarray((row * this.width) + col, ((row + 1) * this.width))
  }

  get(col: number, row: number) {
    return this.array[(row * this.width) + col]
  }

  set(col: number, row: number, value: number) {
    this.array[(row * this.width) + col] = value
  }

}