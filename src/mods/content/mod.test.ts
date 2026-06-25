import { versions } from "@/mods/version/mod.ts";
import { Writable } from "@hazae41/binary";
import { test } from "@hazae41/phobos";
import { Content } from "./mod.ts";

test("numeric", () => {
  Writable.writeToBytes(new Content.Numeric("0123456789", versions[1], 0)).toHex()
})

test("alphanumeric", () => {
  Writable.writeToBytes(new Content.Alphanumeric("DEADBEEF123", versions[1], 0)).toHex()
})

test("byte", () => {
  Writable.writeToBytes(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0)).toHex()
})