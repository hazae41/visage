import { Writable } from "@hazae41/binary";
import { assert, test } from "@hazae41/phobos";
import { Bitset } from "./mod.ts";

test("bitset", () => {
  assert(Writable.writeToBytes(new Bitset(0b11111, 10)).toHex() === "00000000000101010101")
})