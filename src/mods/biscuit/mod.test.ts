import { Biscuit } from "@/mods/biscuit/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { versions } from "@/mods/version/mod.ts";
import { test } from "@hazae41/phobos";
import jsQR from "jsqr";

function print(biscuit: Biscuit) {
  const wrote = new Array(...biscuit.encode())

  const digits = Math.floor(Math.log10(biscuit.width)) + 1

  for (let digit = 0; digit < digits; digit++) {
    const spc = new Array(digits).fill(" ")
    const col = new Array(biscuit.width).fill(0).map((_, x) => Math.floor(x / (10 ** (digits - digit - 1))) % 10)

    console.log(spc.join(""), "", "", "", col.join(" "))
  }

  console.log()
  console.log()

  for (let y = 0; y < biscuit.width; y++) {
    const row = new Array(digits).fill(0).map((_, i) => Math.floor(y / (10 ** (digits - i - 1))) % 10)
    const val = wrote.slice(y * biscuit.width, (y + 1) * biscuit.width).map(b => b % 2 ? "██" : "  ")

    console.log(row.join(""), "", "", "", val.join(""))
  }

  console.log()
  console.log()
}

test("biscuit", () => {
  const biscuit = new Biscuit(new Mixture(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0)))

  print(biscuit)

  const bitset = biscuit.encode()
  const padded = new Uint8Array((biscuit.width + 8) * (biscuit.width + 8))

  for (let y = 0; y < biscuit.width; y++)
    for (let x = 0; x < biscuit.width; x++)
      padded[(y + 4) * (biscuit.width + 8) + (x + 4)] = bitset[y * biscuit.width + x]

  const upsized = new Uint8Array((biscuit.width + 8) * (biscuit.width + 8) * 4)

  for (let i = 0; i < padded.length; i++) {
    const bit = padded[i]

    upsized[i * 4 + 0] = bit
    upsized[i * 4 + 1] = bit
    upsized[i * 4 + 2] = bit
    upsized[i * 4 + 3] = bit
  }

  const rgba = new Uint8ClampedArray((biscuit.width + 8) * (biscuit.width + 8) * 4 * 4)

  for (let i = 0; i < upsized.length; i++) {
    const bit = upsized[i]

    rgba[i * 4 + 0] = bit % 2 === 1 ? 0 : 255
    rgba[i * 4 + 1] = bit % 2 === 1 ? 0 : 255
    rgba[i * 4 + 2] = bit % 2 === 1 ? 0 : 255
    rgba[i * 4 + 3] = 255
  }

  const result = jsQR.default(rgba, (biscuit.width + 8) * 2, (biscuit.width + 8) * 2, {})

  console.log(result)

  return
})