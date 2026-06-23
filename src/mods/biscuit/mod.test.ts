import { Biscuit } from "@/mods/biscuit/mod.ts";
import { Content } from "@/mods/content/mod.ts";
import { Mixture } from "@/mods/mixture/mod.ts";
import { versions } from "@/mods/versions/mod.ts";
import { Writable } from "@hazae41/binary";
import { test } from "@hazae41/phobos";

test("biscuit", () => {
  const biscuit = new Biscuit(new Mixture(new Content.Byte(new TextEncoder().encode("Hello world"), versions[1], 0)))

  const bytes = Writable.writeToBytes(biscuit)

  for (let y = 0; y < biscuit.width; y++)
    console.log(bytes.slice(y * biscuit.width, (y + 1) * biscuit.width).join(" "))

  return
})