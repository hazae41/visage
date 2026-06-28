// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { QrEncoder } from "@/mods/encoder/mod.ts";
import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { assert, test } from "@hazae41/phobos";
import { Decoder, Detector, binarize, grayscale } from "@nuintun/qrcode";

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

test("encoder", () => {
  fastprint(new QrEncoder("byte").encode(new TextEncoder().encode("Yes it works")))
})

test("encoder2", () => {
  for (let i = 0; i < 1165; i++) {
    const message = crypto.getRandomValues(new Uint8Array(i)).toHex()
    const encoded = new QrEncoder("byte").encode(new TextEncoder().encode(message))

    try {
      assert(message === decode(encoded))
    } catch (error) {
      console.log("Could not decode message of length", i)
      continue
    }
  }
})