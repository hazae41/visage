import { Biscuit } from "@/mods/biscuit/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { versions } from "@/mods/versions/mod.ts";
import { Writable } from "@hazae41/binary";
import { test } from "@hazae41/phobos";

function print(biscuit: Biscuit) {
  const wrote = new Array(...Writable.writeToBytes(biscuit))

  const digits = Math.floor(Math.log10(biscuit.width)) + 1

  for (let digit = 0; digit < digits; digit++) {
    const spc = new Array(digits).fill(" ")
    const col = new Array(biscuit.width).fill(0).map((_, x) => Math.floor(x / (10 ** (digits - digit - 1))) % 10)

    console.log(spc.join(""), "", col.join(" "))
  }

  console.log()

  for (let y = 0; y < biscuit.width; y++) {
    const row = new Array(digits).fill(0).map((_, i) => Math.floor(y / (10 ** (digits - i - 1))) % 10)
    const val = wrote.slice(y * biscuit.width, (y + 1) * biscuit.width).map(b => b % 2 ? "██" : "  ")

    console.log(row.join(""), "", val.join(""))
  }

  console.log()
}

test("biscuit", () => {
  const biscuit = new Biscuit(new Mixture(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0)))

  print(biscuit)

  return
})