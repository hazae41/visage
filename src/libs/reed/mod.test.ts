import { test } from "@hazae41/phobos";
import { ReedSolomon } from "./mod.ts";

test("reed solomon", () => {
  const data = new TextEncoder().encode("Hello World")
  const eccs = ReedSolomon.generate(data, 10)

  console.log(data.toHex())
  console.log(eccs.toHex())
})