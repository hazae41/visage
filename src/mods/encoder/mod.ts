import { Uint8Matrix } from "@/libs/matrix/mod.ts";
import { Biscuit } from "@/mods/modules/biscuit/mod.ts";
import { Content } from "@/mods/modules/content/mod.ts";

export class QrEncoder<T extends "numeric" | "alphanumeric" | "byte" | "kanji" = "byte"> {

  /**
   * Encode a QR code with the specified content type and correction level
   * @param content Content type to encode ("numeric" = digits, "alphanumeric" = digits and letters, "byte" = bytes, "kanji" = kanji characters)
   * @param correct Error correction level (0 = low, 1 = medium (default), 2 = quartile, 3 = high)
   */
  constructor(
    readonly content: T,
    readonly correct: 0 | 1 | 2 | 3 = 1
  ) { }

  encode(this: QrEncoder<"numeric">, input: string): Uint8Matrix;

  encode(this: QrEncoder<"alphanumeric">, input: string): Uint8Matrix;

  encode(this: QrEncoder<"byte">, input: Uint8Array): Uint8Matrix;

  encode(this: QrEncoder<"kanji">, input: Array<number>): Uint8Matrix;

  // deno-lint-ignore no-explicit-any
  encode(input: any) {
    if (this.content === "numeric")
      return new Biscuit(Content.Numeric.from(input, this.correct)).encode()
    if (this.content === "alphanumeric")
      return new Biscuit(Content.Alphanumeric.from(input, this.correct)).encode()
    if (this.content === "byte")
      return new Biscuit(Content.Byte.from(input, this.correct)).encode()
    if (this.content === "kanji")
      return new Biscuit(Content.Kanji.from(input, this.correct)).encode()
    throw new Error("Invalid content type")
  }

}