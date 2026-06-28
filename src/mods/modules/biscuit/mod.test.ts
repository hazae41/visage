// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { Biscuit } from "@/mods/modules/biscuit/mod.ts";
import { Content } from "@/mods/modules/content/mod.ts";
import { versions } from "@/mods/modules/version/mod.ts";
import { assert, test } from "@hazae41/phobos";
import { binarize, Decoder, Detector, grayscale } from "@nuintun/qrcode";

function fullprint(matrix: Uint8Matrix) {
  const bitset = new Array(...matrix.array)

  console.log()
  console.log()

  const digits = Math.floor(Math.log10(matrix.width)) + 1

  for (let dig = 0; dig < digits; dig++) {
    const spc = new Array(digits).fill(" ")
    const idx = new Array(matrix.width).fill(0).map((_, x) => Math.floor(x / (10 ** (digits - dig - 1))) % 10)

    console.log(spc.join(""), "", "", "", idx.join(" "))
  }

  console.log()
  console.log()

  for (let row = 0; row < matrix.width; row++) {
    const idx = new Array(digits).fill(0).map((_, i) => Math.floor(row / (10 ** (digits - i - 1))) % 10)
    const val = bitset.slice(row * matrix.width, (row + 1) * matrix.width).map(b => b % 2 ? "██" : "  ")

    console.log(idx.join(""), "", "", "", val.join(""))
  }

  console.log()
  console.log()
}

function fastprint(matrix: Uint8Matrix) {
  const bitset = new Array(...matrix.array)

  console.log()

  for (let row = 0; row < matrix.width; row++)
    console.log(bitset.slice(row * matrix.width, (row + 1) * matrix.width).map(b => b % 2 ? "██" : "  ").join(""))

  console.log()
}

function colorize(matrix: Uint8Matrix) {
  const rgba = new ImageData(matrix.width, matrix.width)

  for (let i = 0; i < matrix.array.length; i++) {
    rgba.data[i * 4 + 0] = matrix.array[i] % 2 ? 0 : 255
    rgba.data[i * 4 + 1] = matrix.array[i] % 2 ? 0 : 255
    rgba.data[i * 4 + 2] = matrix.array[i] % 2 ? 0 : 255
    rgba.data[i * 4 + 3] = 255
  }

  return rgba
}

function decode(matrix: Uint8Matrix) {
  const rgba = colorize(matrix)
  const next = new Detector().detect(binarize(grayscale(rgba), matrix.width, matrix.width)).next()

  if (next.done)
    throw new Error("No QR code found")

  return new Decoder().decode(next.value.matrix).content
}

test("biscuit", () => {
  for (const number in versions) {
    const version = versions[number]
    const maximum = version.levels[0].words.data

    const message = crypto.getRandomValues(new Uint8Array(maximum / 3)).toHex()
    const encoded = new Biscuit(new Content.Byte(new TextEncoder().encode(message), version, 0)).encode()

    try {
      assert(message === decode(encoded), number)
    } catch (error) {
      console.log("Could not decode")

      console.log("- Version", number)
      console.log("- Message", message)

      fastprint(encoded)

      continue
    }
  }
})