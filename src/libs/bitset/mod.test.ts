import { Writable } from "@hazae41/binary";
import { test } from "@hazae41/phobos";
import { Bitset } from "./mod.ts";

test("bitset", () => {
  console.log(Writable.writeToBytes(new Bitset(0b1111, 4)).join(""))
})