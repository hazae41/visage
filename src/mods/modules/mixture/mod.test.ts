import { Content } from "@/mods/modules/content/mod.ts";
import { Mixture } from "@/mods/modules/mixture/mod.ts";
import { versions } from "@/mods/modules/version/mod.ts";
import { test } from "@hazae41/phobos";

// test("numeric", () => {
//   console.log(encode(new Mode.Numeric("0123456789", versions[27], 0)).toHex())
// })

// test("alphanumeric", () => {
//   console.log(encode(new Mode.Alphanumeric("DEADBEEF123", versions[27], 0)).toHex())
// })

test("byte", () => {
  console.log(new Mixture(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0)).encode().length)
})