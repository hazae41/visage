import { ReedSolomon } from "@/libs/correct/mod.ts";
import { test } from "@hazae41/phobos";

test("reed solomon", () => {
  const data = new TextEncoder().encode("Hello World")
  const eccs = ReedSolomon.generate(data, 10)

  console.log(data.toHex())
  console.log(eccs.toHex())
})