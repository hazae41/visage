import { versions } from "@/mods/modules/version/mod.ts";
import { test } from "@hazae41/phobos";
import { Content } from "./mod.ts";

test("numeric", () => {
  console.log(new Content.Numeric("0123456789", versions[1], 0).encode().toHex())
})

test("alphanumeric", () => {
  console.log(new Content.Alphanumeric("DEADBEEF123", versions[1], 0).encode().toHex())
})

test("byte", () => {
  console.log(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0).encode().toHex())
})