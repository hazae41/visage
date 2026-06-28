// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Biscuit } from "@/mods/biscuit/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { QrEncoder } from "@/mods/encoder/mod.ts";
import { versions } from "@/mods/version/mod.ts";
import { assert, test } from "@hazae41/phobos";
import { binarize, Decoder, Detector, grayscale } from "@nuintun/qrcode";

function print(matrix: Uint8Matrix) {
  const bitset = new Array(...new Uint8Array(matrix.buffer))

  console.log()
  console.log()

  const digits = Math.floor(Math.log10(matrix.length)) + 1

  for (let dig = 0; dig < digits; dig++) {
    const spc = new Array(digits).fill(" ")
    const idx = new Array(matrix.length).fill(0).map((_, x) => Math.floor(x / (10 ** (digits - dig - 1))) % 10)

    console.log(spc.join(""), "", "", "", idx.join(" "))
  }

  console.log()
  console.log()

  for (let row = 0; row < matrix.length; row++) {
    const idx = new Array(digits).fill(0).map((_, i) => Math.floor(row / (10 ** (digits - i - 1))) % 10)
    const val = bitset.slice(row * matrix.length, (row + 1) * matrix.length).map(b => b % 2 ? "██" : "  ")

    console.log(idx.join(""), "", "", "", val.join(""))
  }

  console.log()
  console.log()
}

function print2(matrix: Uint8Matrix) {
  const bitset = new Array(...new Uint8Array(matrix.buffer))

  for (let row = 0; row < matrix.length; row++)
    console.log(bitset.slice(row * matrix.length, (row + 1) * matrix.length).map(b => b % 2 ? "██" : "  ").join(""))

  return
}

function colorize(matrix: Uint8Matrix) {
  const bits = new Uint8Array(matrix.buffer)
  const rgba = new ImageData(matrix.length, matrix.length)

  for (let i = 0; i < bits.length; i++) {
    rgba.data[i * 4 + 0] = bits[i] % 2 === 1 ? 0 : 255
    rgba.data[i * 4 + 1] = bits[i] % 2 === 1 ? 0 : 255
    rgba.data[i * 4 + 2] = bits[i] % 2 === 1 ? 0 : 255
    rgba.data[i * 4 + 3] = 255
  }

  return rgba
}

function decode(matrix: Uint8Matrix) {
  const rgba = colorize(matrix)
  const next = new Detector().detect(binarize(grayscale(rgba), matrix.length, matrix.length)).next()

  if (next.done)
    throw new Error("No QR code found")

  return new Decoder().decode(next.value.matrix).content
}

test("biscuit", () => {
  for (const version in versions) {
    const message = "Hello world"
    const encoded = new Biscuit(new Content.Byte(new TextEncoder().encode(message), versions[version], 0)).encode()
    const decoded = decode(encoded)

    assert(message === decoded, version)
  }

  print2(new QrEncoder("byte").encode(new TextEncoder().encode("Yes it works")))
})