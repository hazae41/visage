import { assert, test } from "@hazae41/phobos";
import { BCH } from "./mod.ts";

test("bch(15,5)", () => {
  const data = crypto.getRandomValues(new Uint8Array(5)).map(x => x % 2)
  const bchs = BCH.N15K5.generate(data)

  const full = new Uint8Array(15)
  full.set(data)
  full.set(bchs, 5)

  assert(BCH.N15K5.verify(full))
})

test("bch(18,6)", () => {
  const data = crypto.getRandomValues(new Uint8Array(6)).map(x => x % 2)
  const bchs = BCH.N18K6.generate(data)

  const full = new Uint8Array(18)
  full.set(data)
  full.set(bchs, 6)

  assert(BCH.N18K6.verify(full))
})