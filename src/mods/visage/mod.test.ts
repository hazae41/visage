import { deflate } from "@/libs/deflate/mod.ts";
import { Mode } from "@/mods/visage/mod.ts";
import { Writable } from "@hazae41/binary";
import { test } from "@hazae41/phobos";

test("numeric", () => {
  console.log(deflate(Writable.writeToBytes(new Mode.Numeric("0123456789", 1, 0))).toHex())
})

test("alphanumeric", () => {
  console.log(deflate(Writable.writeToBytes(new Mode.Alphanumeric("DEADBEEF123", 1, 0))).toHex())
})