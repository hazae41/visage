import { assert, test } from "@hazae41/phobos";
import { deflate } from "./mod.ts";

test("bits deflate", () => {
  const bits = new Uint8Array([
    1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1
  ])

  const bytes = new Uint8Array([
    0b10101010,
    0b01010101,
    0b11110000,
    0b00001111
  ])

  assert(deflate(bits).toHex() === bytes.toHex())
})