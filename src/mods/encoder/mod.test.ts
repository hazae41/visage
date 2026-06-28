// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { QrEncoder } from "@/mods/encoder/mod.ts";
import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { test } from "@hazae41/phobos";

function print(matrix: Uint8Matrix) {
  const bitset = new Array(...new Uint8Array(matrix.buffer))

  console.log()

  for (let row = 0; row < matrix.length; row++)
    console.log(bitset.slice(row * matrix.length, (row + 1) * matrix.length).map(b => b % 2 ? "██" : "  ").join(""))

  console.log()
}

test("encoder", () => {
  print(new QrEncoder("byte").encode(new TextEncoder().encode("Yes it works")))
})