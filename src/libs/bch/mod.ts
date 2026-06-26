// deno-lint-ignore-file no-namespace

export namespace BCH {

  export namespace N15K5 {

    const weights = new Uint8Array([1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1])

    /**
     * Generate BCH(15, 5) check bits for the given message
     * @param message Array of 5 bits
     * @returns Array of 10 check bits
     */
    export function generate(message: Uint8Array) {
      const results = new Uint8Array(15)

      results.set(message)

      for (let i = 0; i < 5; i++)
        if (results[i] === 1)
          for (let j = 0; j < 11; j++)
            if (weights[j] === 1)
              results[i + j] ^= 1

      return results.subarray(5)
    }

    /**
     * Verify BCH(15, 5) check bits for the given message
     * @param message Array of 15 bits (5 data bits + 10 check bits)
     * @returns Whether the check bits are valid for the given message
     */
    export function verify(message: Uint8Array) {
      const results = new Uint8Array(15)

      results.set(message)

      for (let i = 0; i < 5; i++)
        if (results[i] === 1)
          for (let j = 0; j < 11; j++)
            if (weights[j] === 1)
              results[i + j] ^= 1

      for (let i = 5; i < 15; i++)
        if (results[i] === 1)
          return false

      return true
    }

  }

  export namespace N18K6 {

    const weights = new Uint8Array([1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1])

    /**
     * Generate BCH(18, 6) check bits for the given message
     * @param message Array of 6 bits
     * @returns Array of 12 check bits
     */
    export function generate(message: Uint8Array) {
      const results = new Uint8Array(18)

      results.set(message)

      for (let i = 0; i < 6; i++)
        if (results[i] === 1)
          for (let j = 0; j < 13; j++)
            if (weights[j] === 1)
              results[i + j] ^= 1

      return results.subarray(6)
    }

    /**
     * Verify BCH(18, 6) check bits for the given message
     * @param message Array of 18 bits (6 data bits + 12 check bits)
     * @returns Whether the check bits are valid for the given message
     */
    export function verify(message: Uint8Array) {
      const results = new Uint8Array(18)

      results.set(message)

      for (let i = 0; i < 6; i++)
        if (results[i] === 1)
          for (let j = 0; j < 13; j++)
            if (weights[j] === 1)
              results[i + j] ^= 1

      for (let i = 6; i < 18; i++)
        if (results[i] === 1)
          return false

      return true
    }

  }

}