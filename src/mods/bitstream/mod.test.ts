import { Bitstream } from "@/mods/bitstream/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { versions } from "@/mods/versions/mod.ts";
import { Writable } from "@hazae41/binary";
import { test } from "@hazae41/phobos";

// test("numeric", () => {
//   console.log(encode(new Mode.Numeric("0123456789", versions[27], 0)).toHex())
// })

// test("alphanumeric", () => {
//   console.log(encode(new Mode.Alphanumeric("DEADBEEF123", versions[27], 0)).toHex())
// })

test("byte", () => {
  console.log(Writable.writeToBytes(new Bitstream(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0))).length)
})