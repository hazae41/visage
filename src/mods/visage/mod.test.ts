import { encode } from "@/mod.ts";
import { versions } from "@/mods/versions/mod.ts";
import { Mode } from "@/mods/visage/mod.ts";
import { test } from "@hazae41/phobos";

test("numeric", () => {
  console.log(encode(new Mode.Numeric("0123456789", versions[1], 0)).toHex())
})

test("alphanumeric", () => {
  console.log(encode(new Mode.Alphanumeric("DEADBEEF123", versions[1], 0)).toHex())
})

test("byte", () => {
  console.log(encode(new Mode.Byte(new Uint8Array([1, 2, 3]), versions[1], 0)).toHex())
})