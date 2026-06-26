import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Biscuit } from "@/mods/biscuit/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { versions } from "@/mods/version/mod.ts";
import { test } from "@hazae41/phobos";
import { binarize, Decoder, Detector, grayscale } from "@nuintun/qrcode";

function print(matrix: Uint8Matrix) {
  const bits = new Uint8Array(matrix.buffer)

  console.log()
  console.log()

  const digits = Math.floor(Math.log10(matrix.length)) + 1

  for (let digit = 0; digit < digits; digit++) {
    const spc = new Array(digits).fill(" ")
    const col = new Array(matrix.length).fill(0).map((_, x) => Math.floor(x / (10 ** (digits - digit - 1))) % 10)

    console.log(spc.join(""), "", "", "", col.join(" "))
  }

  console.log()
  console.log()

  for (let y = 0; y < matrix.length; y++) {
    const row = new Array(digits).fill(0).map((_, i) => Math.floor(y / (10 ** (digits - i - 1))) % 10)
    const val = new Array(...bits).slice(y * matrix.length, (y + 1) * matrix.length).map(b => b % 2 ? "██" : "  ")

    console.log(row.join(""), "", "", "", val.join(""))
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

test("biscuit", () => {
  const bits = new Biscuit(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0)).encode()
  const rgba = colorize(bits)

  print(bits)

  const detection = new Detector().detect(binarize(grayscale(rgba), bits.length, bits.length))

  for (let next = detection.next(); !next.done; next = detection.next())
    console.log(new Decoder().decode(next.value.matrix).content)

  return
})