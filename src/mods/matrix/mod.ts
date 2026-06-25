/**
 * Uint8Array but in two dimensions
 */
export class Uint8Matrix {

  constructor(
    readonly data: Uint8Array,
    readonly size: number
  ) { }

  getUint8(x: number, y: number) {
    return this.data[(y * this.size) + x]
  }

  setUint8(x: number, y: number, value: number) {
    this.data[(y * this.size) + x] = value
  }

  set(x: number, y: number, array: ArrayLike<number>) {
    this.data.set(array, (y * this.size) + x)
  }

  get(x: number, y: number, length: number) {
    return this.data.subarray((y * this.size) + x, (y * this.size) + x + length)
  }

  clone() {
    return new Uint8Matrix(new Uint8Array(this.data), this.size)
  }

}