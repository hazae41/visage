// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Biscuit } from "@/mods/biscuit/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { versions } from "@/mods/version/mod.ts";
import { assert, test } from "@hazae41/phobos";
import { binarize, Decoder, Detector, grayscale } from "@nuintun/qrcode";

function print(matrix: Uint8Matrix) {
  const bits = new Uint8Array(matrix.buffer)

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
    const val = new Array(...bits).slice(row * matrix.length, (row + 1) * matrix.length).map(b => b % 2 ? "██" : "  ")

    console.log(idx.join(""), "", "", "", val.join(""))
  }

  console.log()
  console.log()
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

function f(biscuit: Biscuit) {
  const bits = biscuit.encode()
  const rgba = colorize(bits)

  // print(bits)

  const next = new Detector().detect(binarize(grayscale(rgba), bits.length, bits.length)).next()

  if (next.done)
    throw new Error("No QR code found")

  return new Decoder().decode(next.value.matrix).content
}

test("biscuit", () => {
  for (const version in versions) {
    const encoded = "Hello world"
    const decoded = f(new Biscuit(new Content.Byte(new TextEncoder().encode(encoded), versions[version], 0)))

    assert(encoded === decoded, version)
  }

  print(new Biscuit(new Content.Byte(new TextEncoder().encode("Test"), versions[7], 0)).encode())
})