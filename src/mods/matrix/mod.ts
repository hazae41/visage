/**
 * Uint8Array but in two dimensions
 */
export class Matrix {

  constructor(
    readonly bytes: Uint8Array,
    readonly width: number
  ) { }

  getUint8(x: number, y: number) {
    return this.bytes[(y * this.width) + x]
  }

  setUint8(x: number, y: number, value: number) {
    this.bytes[(y * this.width) + x] = value
  }

  set(x: number, y: number, array: ArrayLike<number>) {
    this.bytes.set(array, (y * this.width) + x)
  }

  get(x: number, y: number, length: number) {
    return this.bytes.subarray((y * this.width) + x, (y * this.width) + x + length)
  }

  clone() {
    return new Matrix(new Uint8Array(this.bytes), this.width)
  }

}