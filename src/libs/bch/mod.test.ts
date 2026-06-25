import { assert, test } from "@hazae41/phobos";
import { BCH } from "./mod.ts";

test("bch(15,5)", () => {
  const data = crypto.getRandomValues(new Uint8Array(5)).map(x => x % 2)
  const bchs = BCH.N15.K5.generate(data)

  const full = new Uint8Array(15)
  full.set(data)
  full.set(bchs, 5)

  assert(BCH.N15.K5.verify(full))
})