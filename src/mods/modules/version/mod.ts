import { BCH } from "@/libs/bch/mod.ts";
import { Bitset } from "@/libs/bitset/mod.ts";
import { Uint8Matrix } from "@/mods/matrix/mod.ts";
import { Cursor } from "@hazae41/cursor";

export class Version {

  constructor(
    readonly version: VersionInfo
  ) { }

  write(matrix: Uint8Matrix) {
    if (this.version.number < 7)
      return

    const cursor = new Cursor(new Uint8Array(18))

    new Bitset(this.version.number, 6).write(cursor)

    cursor.write(BCH.N18K6.generate(cursor.before))

    cursor.offset = 0

    for (let subrow = 0; subrow < 6; subrow++)
      for (let subcol = 0; subcol < 3; subcol++)
        matrix.set(matrix.width - 9 - subcol, 5 - subrow, cursor.readUint8() === 1 ? 3 : 2)

    cursor.offset = 0

    for (let subcol = 0; subcol < 6; subcol++)
      for (let subrow = 0; subrow < 3; subrow++)
        matrix.set(5 - subcol, matrix.width - 9 - subrow, cursor.readUint8() === 1 ? 3 : 2)

    return
  }

}

export interface VersionInfo {
  /**
   * Version number
   */
  readonly number: number

  /**
   * Total number of bits
   */
  readonly length: number

  /**
   * Alignment patterns
   */
  readonly aligns: PointInfo[]

  /**
   * Levels of error correction
   */
  readonly levels: [L: LevelInfo, M: LevelInfo, Q: LevelInfo, H: LevelInfo]
}

export interface PointInfo {
  /**
   * Column (X) of the point
   */
  readonly col: number

  /**
   * Row (Y) of the point
   */
  readonly row: number
}

export interface LevelInfo {
  /**
   * Number of words
   */
  readonly words: WordsInfo

  /**
   * Types of blocks
   */
  readonly types: BlockInfo[]
}

export interface WordsInfo {
  /**
   * Number of data words
   */
  readonly data: number

  /**
   * Number of reed words
   */
  readonly reed: number
}

export interface BlockInfo {
  /**
   * Number of blocks of this type
   */
  readonly count: number

  /**
   * Number of words in each block
   */
  readonly words: WordsInfo
}

export const versions: Record<string, VersionInfo> = {
  "1": {
    "number": 1,
    "length": 208,
    "aligns": [],
    "levels": [
      {
        "words": {
          "data": 19,
          "reed": 7
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 19,
              "reed": 7
            }
          }
        ]
      },
      {
        "words": {
          "data": 16,
          "reed": 10
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 16,
              "reed": 10
            }
          }
        ]
      },
      {
        "words": {
          "data": 13,
          "reed": 13
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 13,
              "reed": 13
            }
          }
        ]
      },
      {
        "words": {
          "data": 9,
          "reed": 17
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 9,
              "reed": 17
            }
          }
        ]
      }
    ]
  },
  "2": {
    "number": 2,
    "length": 359,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 18
      },
      {
        "col": 18,
        "row": 6
      },
      {
        "col": 18,
        "row": 18
      }
    ],
    "levels": [
      {
        "words": {
          "data": 34,
          "reed": 10
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 34,
              "reed": 10
            }
          }
        ]
      },
      {
        "words": {
          "data": 28,
          "reed": 16
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 28,
              "reed": 16
            }
          }
        ]
      },
      {
        "words": {
          "data": 22,
          "reed": 22
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 22,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 16,
          "reed": 28
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 16,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "3": {
    "number": 3,
    "length": 567,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 22
      },
      {
        "col": 22,
        "row": 6
      },
      {
        "col": 22,
        "row": 22
      }
    ],
    "levels": [
      {
        "words": {
          "data": 55,
          "reed": 15
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 55,
              "reed": 15
            }
          }
        ]
      },
      {
        "words": {
          "data": 44,
          "reed": 26
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 44,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 34,
          "reed": 36
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 17,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 26,
          "reed": 44
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 13,
              "reed": 22
            }
          }
        ]
      }
    ]
  },
  "4": {
    "number": 4,
    "length": 807,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      }
    ],
    "levels": [
      {
        "words": {
          "data": 80,
          "reed": 20
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 80,
              "reed": 20
            }
          }
        ]
      },
      {
        "words": {
          "data": 64,
          "reed": 36
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 32,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 48,
          "reed": 52
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 24,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 36,
          "reed": 64
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 9,
              "reed": 16
            }
          }
        ]
      }
    ]
  },
  "5": {
    "number": 5,
    "length": 1079,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      }
    ],
    "levels": [
      {
        "words": {
          "data": 108,
          "reed": 26
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 108,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 86,
          "reed": 48
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 43,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 62,
          "reed": 72
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 15,
              "reed": 18
            }
          },
          {
            "count": 2,
            "words": {
              "data": 16,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 46,
          "reed": 88
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 11,
              "reed": 22
            }
          },
          {
            "count": 2,
            "words": {
              "data": 12,
              "reed": 22
            }
          }
        ]
      }
    ]
  },
  "6": {
    "number": 6,
    "length": 1383,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 34
      },
      {
        "col": 34,
        "row": 6
      },
      {
        "col": 34,
        "row": 34
      }
    ],
    "levels": [
      {
        "words": {
          "data": 136,
          "reed": 36
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 68,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 108,
          "reed": 64
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 27,
              "reed": 16
            }
          }
        ]
      },
      {
        "words": {
          "data": 76,
          "reed": 96
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 19,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 60,
          "reed": 112
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 15,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "7": {
    "number": 7,
    "length": 1568,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 22
      },
      {
        "col": 6,
        "row": 38
      },
      {
        "col": 22,
        "row": 6
      },
      {
        "col": 22,
        "row": 22
      },
      {
        "col": 22,
        "row": 38
      },
      {
        "col": 38,
        "row": 6
      },
      {
        "col": 38,
        "row": 22
      },
      {
        "col": 38,
        "row": 38
      }
    ],
    "levels": [
      {
        "words": {
          "data": 156,
          "reed": 40
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 78,
              "reed": 20
            }
          }
        ]
      },
      {
        "words": {
          "data": 124,
          "reed": 72
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 31,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 88,
          "reed": 108
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 14,
              "reed": 18
            }
          },
          {
            "count": 4,
            "words": {
              "data": 15,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 66,
          "reed": 130
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 13,
              "reed": 26
            }
          },
          {
            "count": 1,
            "words": {
              "data": 14,
              "reed": 26
            }
          }
        ]
      }
    ]
  },
  "8": {
    "number": 8,
    "length": 1936,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 24
      },
      {
        "col": 6,
        "row": 42
      },
      {
        "col": 24,
        "row": 6
      },
      {
        "col": 24,
        "row": 24
      },
      {
        "col": 24,
        "row": 42
      },
      {
        "col": 42,
        "row": 6
      },
      {
        "col": 42,
        "row": 24
      },
      {
        "col": 42,
        "row": 42
      }
    ],
    "levels": [
      {
        "words": {
          "data": 194,
          "reed": 48
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 97,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 154,
          "reed": 88
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 38,
              "reed": 22
            }
          },
          {
            "count": 2,
            "words": {
              "data": 39,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 110,
          "reed": 132
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 18,
              "reed": 22
            }
          },
          {
            "count": 2,
            "words": {
              "data": 19,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 86,
          "reed": 156
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 14,
              "reed": 26
            }
          },
          {
            "count": 2,
            "words": {
              "data": 15,
              "reed": 26
            }
          }
        ]
      }
    ]
  },
  "9": {
    "number": 9,
    "length": 2336,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 46
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 46
      },
      {
        "col": 46,
        "row": 6
      },
      {
        "col": 46,
        "row": 26
      },
      {
        "col": 46,
        "row": 46
      }
    ],
    "levels": [
      {
        "words": {
          "data": 232,
          "reed": 60
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 116,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 182,
          "reed": 110
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 36,
              "reed": 22
            }
          },
          {
            "count": 2,
            "words": {
              "data": 37,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 132,
          "reed": 160
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 16,
              "reed": 20
            }
          },
          {
            "count": 4,
            "words": {
              "data": 17,
              "reed": 20
            }
          }
        ]
      },
      {
        "words": {
          "data": 100,
          "reed": 192
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 12,
              "reed": 24
            }
          },
          {
            "count": 4,
            "words": {
              "data": 13,
              "reed": 24
            }
          }
        ]
      }
    ]
  },
  "10": {
    "number": 10,
    "length": 2768,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 28
      },
      {
        "col": 6,
        "row": 50
      },
      {
        "col": 28,
        "row": 6
      },
      {
        "col": 28,
        "row": 28
      },
      {
        "col": 28,
        "row": 50
      },
      {
        "col": 50,
        "row": 6
      },
      {
        "col": 50,
        "row": 28
      },
      {
        "col": 50,
        "row": 50
      }
    ],
    "levels": [
      {
        "words": {
          "data": 274,
          "reed": 72
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 68,
              "reed": 18
            }
          },
          {
            "count": 2,
            "words": {
              "data": 69,
              "reed": 18
            }
          }
        ]
      },
      {
        "words": {
          "data": 216,
          "reed": 130
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 43,
              "reed": 26
            }
          },
          {
            "count": 1,
            "words": {
              "data": 44,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 154,
          "reed": 192
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 19,
              "reed": 24
            }
          },
          {
            "count": 2,
            "words": {
              "data": 20,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 122,
          "reed": 224
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 15,
              "reed": 28
            }
          },
          {
            "count": 2,
            "words": {
              "data": 16,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "11": {
    "number": 11,
    "length": 3232,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 54
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 30
      },
      {
        "col": 54,
        "row": 54
      }
    ],
    "levels": [
      {
        "words": {
          "data": 324,
          "reed": 80
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 81,
              "reed": 20
            }
          }
        ]
      },
      {
        "words": {
          "data": 254,
          "reed": 150
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 50,
              "reed": 30
            }
          },
          {
            "count": 4,
            "words": {
              "data": 51,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 180,
          "reed": 224
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 22,
              "reed": 28
            }
          },
          {
            "count": 4,
            "words": {
              "data": 23,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 140,
          "reed": 264
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 12,
              "reed": 24
            }
          },
          {
            "count": 8,
            "words": {
              "data": 13,
              "reed": 24
            }
          }
        ]
      }
    ]
  },
  "12": {
    "number": 12,
    "length": 3728,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 32
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 32,
        "row": 6
      },
      {
        "col": 32,
        "row": 32
      },
      {
        "col": 32,
        "row": 58
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 32
      },
      {
        "col": 58,
        "row": 58
      }
    ],
    "levels": [
      {
        "words": {
          "data": 370,
          "reed": 96
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 92,
              "reed": 24
            }
          },
          {
            "count": 2,
            "words": {
              "data": 93,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 290,
          "reed": 176
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 36,
              "reed": 22
            }
          },
          {
            "count": 2,
            "words": {
              "data": 37,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 206,
          "reed": 260
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 20,
              "reed": 26
            }
          },
          {
            "count": 6,
            "words": {
              "data": 21,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 158,
          "reed": 308
        },
        "types": [
          {
            "count": 7,
            "words": {
              "data": 14,
              "reed": 28
            }
          },
          {
            "count": 4,
            "words": {
              "data": 15,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "13": {
    "number": 13,
    "length": 4256,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 34
      },
      {
        "col": 6,
        "row": 62
      },
      {
        "col": 34,
        "row": 6
      },
      {
        "col": 34,
        "row": 34
      },
      {
        "col": 34,
        "row": 62
      },
      {
        "col": 62,
        "row": 6
      },
      {
        "col": 62,
        "row": 34
      },
      {
        "col": 62,
        "row": 62
      }
    ],
    "levels": [
      {
        "words": {
          "data": 428,
          "reed": 104
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 107,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 334,
          "reed": 198
        },
        "types": [
          {
            "count": 8,
            "words": {
              "data": 37,
              "reed": 22
            }
          },
          {
            "count": 1,
            "words": {
              "data": 38,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 244,
          "reed": 288
        },
        "types": [
          {
            "count": 8,
            "words": {
              "data": 20,
              "reed": 24
            }
          },
          {
            "count": 4,
            "words": {
              "data": 21,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 180,
          "reed": 352
        },
        "types": [
          {
            "count": 12,
            "words": {
              "data": 11,
              "reed": 22
            }
          },
          {
            "count": 4,
            "words": {
              "data": 12,
              "reed": 22
            }
          }
        ]
      }
    ]
  },
  "14": {
    "number": 14,
    "length": 4651,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 46
      },
      {
        "col": 6,
        "row": 66
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 46
      },
      {
        "col": 26,
        "row": 66
      },
      {
        "col": 46,
        "row": 6
      },
      {
        "col": 46,
        "row": 26
      },
      {
        "col": 46,
        "row": 46
      },
      {
        "col": 46,
        "row": 66
      },
      {
        "col": 66,
        "row": 6
      },
      {
        "col": 66,
        "row": 26
      },
      {
        "col": 66,
        "row": 46
      },
      {
        "col": 66,
        "row": 66
      }
    ],
    "levels": [
      {
        "words": {
          "data": 461,
          "reed": 120
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 115,
              "reed": 30
            }
          },
          {
            "count": 1,
            "words": {
              "data": 116,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 365,
          "reed": 216
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 40,
              "reed": 24
            }
          },
          {
            "count": 5,
            "words": {
              "data": 41,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 261,
          "reed": 320
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 16,
              "reed": 20
            }
          },
          {
            "count": 5,
            "words": {
              "data": 17,
              "reed": 20
            }
          }
        ]
      },
      {
        "words": {
          "data": 197,
          "reed": 384
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 12,
              "reed": 24
            }
          },
          {
            "count": 5,
            "words": {
              "data": 13,
              "reed": 24
            }
          }
        ]
      }
    ]
  },
  "15": {
    "number": 15,
    "length": 5243,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 48
      },
      {
        "col": 6,
        "row": 70
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 48
      },
      {
        "col": 26,
        "row": 70
      },
      {
        "col": 48,
        "row": 6
      },
      {
        "col": 48,
        "row": 26
      },
      {
        "col": 48,
        "row": 48
      },
      {
        "col": 48,
        "row": 70
      },
      {
        "col": 70,
        "row": 6
      },
      {
        "col": 70,
        "row": 26
      },
      {
        "col": 70,
        "row": 48
      },
      {
        "col": 70,
        "row": 70
      }
    ],
    "levels": [
      {
        "words": {
          "data": 523,
          "reed": 132
        },
        "types": [
          {
            "count": 5,
            "words": {
              "data": 87,
              "reed": 22
            }
          },
          {
            "count": 1,
            "words": {
              "data": 88,
              "reed": 22
            }
          }
        ]
      },
      {
        "words": {
          "data": 415,
          "reed": 240
        },
        "types": [
          {
            "count": 5,
            "words": {
              "data": 41,
              "reed": 24
            }
          },
          {
            "count": 5,
            "words": {
              "data": 42,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 295,
          "reed": 360
        },
        "types": [
          {
            "count": 5,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 7,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 223,
          "reed": 432
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 12,
              "reed": 24
            }
          },
          {
            "count": 7,
            "words": {
              "data": 13,
              "reed": 24
            }
          }
        ]
      }
    ]
  },
  "16": {
    "number": 16,
    "length": 5867,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 50
      },
      {
        "col": 6,
        "row": 74
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 50
      },
      {
        "col": 26,
        "row": 74
      },
      {
        "col": 50,
        "row": 6
      },
      {
        "col": 50,
        "row": 26
      },
      {
        "col": 50,
        "row": 50
      },
      {
        "col": 50,
        "row": 74
      },
      {
        "col": 74,
        "row": 6
      },
      {
        "col": 74,
        "row": 26
      },
      {
        "col": 74,
        "row": 50
      },
      {
        "col": 74,
        "row": 74
      }
    ],
    "levels": [
      {
        "words": {
          "data": 589,
          "reed": 144
        },
        "types": [
          {
            "count": 5,
            "words": {
              "data": 98,
              "reed": 24
            }
          },
          {
            "count": 1,
            "words": {
              "data": 99,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 453,
          "reed": 280
        },
        "types": [
          {
            "count": 7,
            "words": {
              "data": 45,
              "reed": 28
            }
          },
          {
            "count": 3,
            "words": {
              "data": 46,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 325,
          "reed": 408
        },
        "types": [
          {
            "count": 15,
            "words": {
              "data": 19,
              "reed": 24
            }
          },
          {
            "count": 2,
            "words": {
              "data": 20,
              "reed": 24
            }
          }
        ]
      },
      {
        "words": {
          "data": 253,
          "reed": 480
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 13,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "17": {
    "number": 17,
    "length": 6523,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 78
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 54
      },
      {
        "col": 30,
        "row": 78
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 30
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 78
      },
      {
        "col": 78,
        "row": 6
      },
      {
        "col": 78,
        "row": 30
      },
      {
        "col": 78,
        "row": 54
      },
      {
        "col": 78,
        "row": 78
      }
    ],
    "levels": [
      {
        "words": {
          "data": 647,
          "reed": 168
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 107,
              "reed": 28
            }
          },
          {
            "count": 5,
            "words": {
              "data": 108,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 507,
          "reed": 308
        },
        "types": [
          {
            "count": 10,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 1,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 367,
          "reed": 448
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 22,
              "reed": 28
            }
          },
          {
            "count": 15,
            "words": {
              "data": 23,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 283,
          "reed": 532
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 14,
              "reed": 28
            }
          },
          {
            "count": 17,
            "words": {
              "data": 15,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "18": {
    "number": 18,
    "length": 7211,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 56
      },
      {
        "col": 6,
        "row": 82
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 56
      },
      {
        "col": 30,
        "row": 82
      },
      {
        "col": 56,
        "row": 6
      },
      {
        "col": 56,
        "row": 30
      },
      {
        "col": 56,
        "row": 56
      },
      {
        "col": 56,
        "row": 82
      },
      {
        "col": 82,
        "row": 6
      },
      {
        "col": 82,
        "row": 30
      },
      {
        "col": 82,
        "row": 56
      },
      {
        "col": 82,
        "row": 82
      }
    ],
    "levels": [
      {
        "words": {
          "data": 721,
          "reed": 180
        },
        "types": [
          {
            "count": 5,
            "words": {
              "data": 120,
              "reed": 30
            }
          },
          {
            "count": 1,
            "words": {
              "data": 121,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 563,
          "reed": 338
        },
        "types": [
          {
            "count": 9,
            "words": {
              "data": 43,
              "reed": 26
            }
          },
          {
            "count": 4,
            "words": {
              "data": 44,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 397,
          "reed": 504
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 22,
              "reed": 28
            }
          },
          {
            "count": 1,
            "words": {
              "data": 23,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 313,
          "reed": 588
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 14,
              "reed": 28
            }
          },
          {
            "count": 19,
            "words": {
              "data": 15,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "19": {
    "number": 19,
    "length": 7931,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 6,
        "row": 86
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 58
      },
      {
        "col": 30,
        "row": 86
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 30
      },
      {
        "col": 58,
        "row": 58
      },
      {
        "col": 58,
        "row": 86
      },
      {
        "col": 86,
        "row": 6
      },
      {
        "col": 86,
        "row": 30
      },
      {
        "col": 86,
        "row": 58
      },
      {
        "col": 86,
        "row": 86
      }
    ],
    "levels": [
      {
        "words": {
          "data": 795,
          "reed": 196
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 113,
              "reed": 28
            }
          },
          {
            "count": 4,
            "words": {
              "data": 114,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 627,
          "reed": 364
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 44,
              "reed": 26
            }
          },
          {
            "count": 11,
            "words": {
              "data": 45,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 445,
          "reed": 546
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 21,
              "reed": 26
            }
          },
          {
            "count": 4,
            "words": {
              "data": 22,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 341,
          "reed": 650
        },
        "types": [
          {
            "count": 9,
            "words": {
              "data": 13,
              "reed": 26
            }
          },
          {
            "count": 16,
            "words": {
              "data": 14,
              "reed": 26
            }
          }
        ]
      }
    ]
  },
  "20": {
    "number": 20,
    "length": 8683,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 34
      },
      {
        "col": 6,
        "row": 62
      },
      {
        "col": 6,
        "row": 90
      },
      {
        "col": 34,
        "row": 6
      },
      {
        "col": 34,
        "row": 34
      },
      {
        "col": 34,
        "row": 62
      },
      {
        "col": 34,
        "row": 90
      },
      {
        "col": 62,
        "row": 6
      },
      {
        "col": 62,
        "row": 34
      },
      {
        "col": 62,
        "row": 62
      },
      {
        "col": 62,
        "row": 90
      },
      {
        "col": 90,
        "row": 6
      },
      {
        "col": 90,
        "row": 34
      },
      {
        "col": 90,
        "row": 62
      },
      {
        "col": 90,
        "row": 90
      }
    ],
    "levels": [
      {
        "words": {
          "data": 861,
          "reed": 224
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 107,
              "reed": 28
            }
          },
          {
            "count": 5,
            "words": {
              "data": 108,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 669,
          "reed": 416
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 41,
              "reed": 26
            }
          },
          {
            "count": 13,
            "words": {
              "data": 42,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 485,
          "reed": 600
        },
        "types": [
          {
            "count": 15,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 5,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 385,
          "reed": 700
        },
        "types": [
          {
            "count": 15,
            "words": {
              "data": 15,
              "reed": 28
            }
          },
          {
            "count": 10,
            "words": {
              "data": 16,
              "reed": 28
            }
          }
        ]
      }
    ]
  },
  "21": {
    "number": 21,
    "length": 9252,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 28
      },
      {
        "col": 6,
        "row": 50
      },
      {
        "col": 6,
        "row": 72
      },
      {
        "col": 6,
        "row": 94
      },
      {
        "col": 28,
        "row": 6
      },
      {
        "col": 28,
        "row": 28
      },
      {
        "col": 28,
        "row": 50
      },
      {
        "col": 28,
        "row": 72
      },
      {
        "col": 28,
        "row": 94
      },
      {
        "col": 50,
        "row": 6
      },
      {
        "col": 50,
        "row": 28
      },
      {
        "col": 50,
        "row": 50
      },
      {
        "col": 50,
        "row": 72
      },
      {
        "col": 50,
        "row": 94
      },
      {
        "col": 72,
        "row": 6
      },
      {
        "col": 72,
        "row": 28
      },
      {
        "col": 72,
        "row": 50
      },
      {
        "col": 72,
        "row": 72
      },
      {
        "col": 72,
        "row": 94
      },
      {
        "col": 94,
        "row": 6
      },
      {
        "col": 94,
        "row": 28
      },
      {
        "col": 94,
        "row": 50
      },
      {
        "col": 94,
        "row": 72
      },
      {
        "col": 94,
        "row": 94
      }
    ],
    "levels": [
      {
        "words": {
          "data": 932,
          "reed": 224
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 116,
              "reed": 28
            }
          },
          {
            "count": 4,
            "words": {
              "data": 117,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 714,
          "reed": 442
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 42,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 512,
          "reed": 644
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 22,
              "reed": 28
            }
          },
          {
            "count": 6,
            "words": {
              "data": 23,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 406,
          "reed": 750
        },
        "types": [
          {
            "count": 19,
            "words": {
              "data": 16,
              "reed": 30
            }
          },
          {
            "count": 6,
            "words": {
              "data": 17,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "22": {
    "number": 22,
    "length": 10068,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 50
      },
      {
        "col": 6,
        "row": 74
      },
      {
        "col": 6,
        "row": 98
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 50
      },
      {
        "col": 26,
        "row": 74
      },
      {
        "col": 26,
        "row": 98
      },
      {
        "col": 50,
        "row": 6
      },
      {
        "col": 50,
        "row": 26
      },
      {
        "col": 50,
        "row": 50
      },
      {
        "col": 50,
        "row": 74
      },
      {
        "col": 50,
        "row": 98
      },
      {
        "col": 74,
        "row": 6
      },
      {
        "col": 74,
        "row": 26
      },
      {
        "col": 74,
        "row": 50
      },
      {
        "col": 74,
        "row": 74
      },
      {
        "col": 74,
        "row": 98
      },
      {
        "col": 98,
        "row": 6
      },
      {
        "col": 98,
        "row": 26
      },
      {
        "col": 98,
        "row": 50
      },
      {
        "col": 98,
        "row": 74
      },
      {
        "col": 98,
        "row": 98
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1006,
          "reed": 252
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 111,
              "reed": 28
            }
          },
          {
            "count": 7,
            "words": {
              "data": 112,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 782,
          "reed": 476
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 46,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 568,
          "reed": 690
        },
        "types": [
          {
            "count": 7,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 16,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 442,
          "reed": 816
        },
        "types": [
          {
            "count": 34,
            "words": {
              "data": 13,
              "reed": 24
            }
          }
        ]
      }
    ]
  },
  "23": {
    "number": 23,
    "length": 10916,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 78
      },
      {
        "col": 6,
        "row": 102
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 54
      },
      {
        "col": 30,
        "row": 78
      },
      {
        "col": 30,
        "row": 102
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 30
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 78
      },
      {
        "col": 54,
        "row": 102
      },
      {
        "col": 78,
        "row": 6
      },
      {
        "col": 78,
        "row": 30
      },
      {
        "col": 78,
        "row": 54
      },
      {
        "col": 78,
        "row": 78
      },
      {
        "col": 78,
        "row": 102
      },
      {
        "col": 102,
        "row": 6
      },
      {
        "col": 102,
        "row": 30
      },
      {
        "col": 102,
        "row": 54
      },
      {
        "col": 102,
        "row": 78
      },
      {
        "col": 102,
        "row": 102
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1094,
          "reed": 270
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 121,
              "reed": 30
            }
          },
          {
            "count": 5,
            "words": {
              "data": 122,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 860,
          "reed": 504
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 14,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 614,
          "reed": 750
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 14,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 464,
          "reed": 900
        },
        "types": [
          {
            "count": 16,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 14,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "24": {
    "number": 24,
    "length": 11796,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 28
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 80
      },
      {
        "col": 6,
        "row": 106
      },
      {
        "col": 28,
        "row": 6
      },
      {
        "col": 28,
        "row": 28
      },
      {
        "col": 28,
        "row": 54
      },
      {
        "col": 28,
        "row": 80
      },
      {
        "col": 28,
        "row": 106
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 28
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 80
      },
      {
        "col": 54,
        "row": 106
      },
      {
        "col": 80,
        "row": 6
      },
      {
        "col": 80,
        "row": 28
      },
      {
        "col": 80,
        "row": 54
      },
      {
        "col": 80,
        "row": 80
      },
      {
        "col": 80,
        "row": 106
      },
      {
        "col": 106,
        "row": 6
      },
      {
        "col": 106,
        "row": 28
      },
      {
        "col": 106,
        "row": 54
      },
      {
        "col": 106,
        "row": 80
      },
      {
        "col": 106,
        "row": 106
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1174,
          "reed": 300
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 117,
              "reed": 30
            }
          },
          {
            "count": 4,
            "words": {
              "data": 118,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 914,
          "reed": 560
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 45,
              "reed": 28
            }
          },
          {
            "count": 14,
            "words": {
              "data": 46,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 664,
          "reed": 810
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 16,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 514,
          "reed": 960
        },
        "types": [
          {
            "count": 30,
            "words": {
              "data": 16,
              "reed": 30
            }
          },
          {
            "count": 2,
            "words": {
              "data": 17,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "25": {
    "number": 25,
    "length": 12708,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 32
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 6,
        "row": 84
      },
      {
        "col": 6,
        "row": 110
      },
      {
        "col": 32,
        "row": 6
      },
      {
        "col": 32,
        "row": 32
      },
      {
        "col": 32,
        "row": 58
      },
      {
        "col": 32,
        "row": 84
      },
      {
        "col": 32,
        "row": 110
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 32
      },
      {
        "col": 58,
        "row": 58
      },
      {
        "col": 58,
        "row": 84
      },
      {
        "col": 58,
        "row": 110
      },
      {
        "col": 84,
        "row": 6
      },
      {
        "col": 84,
        "row": 32
      },
      {
        "col": 84,
        "row": 58
      },
      {
        "col": 84,
        "row": 84
      },
      {
        "col": 84,
        "row": 110
      },
      {
        "col": 110,
        "row": 6
      },
      {
        "col": 110,
        "row": 32
      },
      {
        "col": 110,
        "row": 58
      },
      {
        "col": 110,
        "row": 84
      },
      {
        "col": 110,
        "row": 110
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1276,
          "reed": 312
        },
        "types": [
          {
            "count": 8,
            "words": {
              "data": 106,
              "reed": 26
            }
          },
          {
            "count": 4,
            "words": {
              "data": 107,
              "reed": 26
            }
          }
        ]
      },
      {
        "words": {
          "data": 1000,
          "reed": 588
        },
        "types": [
          {
            "count": 8,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 13,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 718,
          "reed": 870
        },
        "types": [
          {
            "count": 7,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 22,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 538,
          "reed": 1050
        },
        "types": [
          {
            "count": 22,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 13,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "26": {
    "number": 26,
    "length": 13652,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 6,
        "row": 86
      },
      {
        "col": 6,
        "row": 114
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 58
      },
      {
        "col": 30,
        "row": 86
      },
      {
        "col": 30,
        "row": 114
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 30
      },
      {
        "col": 58,
        "row": 58
      },
      {
        "col": 58,
        "row": 86
      },
      {
        "col": 58,
        "row": 114
      },
      {
        "col": 86,
        "row": 6
      },
      {
        "col": 86,
        "row": 30
      },
      {
        "col": 86,
        "row": 58
      },
      {
        "col": 86,
        "row": 86
      },
      {
        "col": 86,
        "row": 114
      },
      {
        "col": 114,
        "row": 6
      },
      {
        "col": 114,
        "row": 30
      },
      {
        "col": 114,
        "row": 58
      },
      {
        "col": 114,
        "row": 86
      },
      {
        "col": 114,
        "row": 114
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1370,
          "reed": 336
        },
        "types": [
          {
            "count": 10,
            "words": {
              "data": 114,
              "reed": 28
            }
          },
          {
            "count": 2,
            "words": {
              "data": 115,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1062,
          "reed": 644
        },
        "types": [
          {
            "count": 19,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 4,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 754,
          "reed": 952
        },
        "types": [
          {
            "count": 28,
            "words": {
              "data": 22,
              "reed": 28
            }
          },
          {
            "count": 6,
            "words": {
              "data": 23,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 596,
          "reed": 1110
        },
        "types": [
          {
            "count": 33,
            "words": {
              "data": 16,
              "reed": 30
            }
          },
          {
            "count": 4,
            "words": {
              "data": 17,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "27": {
    "number": 27,
    "length": 14628,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 34
      },
      {
        "col": 6,
        "row": 62
      },
      {
        "col": 6,
        "row": 90
      },
      {
        "col": 6,
        "row": 118
      },
      {
        "col": 34,
        "row": 6
      },
      {
        "col": 34,
        "row": 34
      },
      {
        "col": 34,
        "row": 62
      },
      {
        "col": 34,
        "row": 90
      },
      {
        "col": 34,
        "row": 118
      },
      {
        "col": 62,
        "row": 6
      },
      {
        "col": 62,
        "row": 34
      },
      {
        "col": 62,
        "row": 62
      },
      {
        "col": 62,
        "row": 90
      },
      {
        "col": 62,
        "row": 118
      },
      {
        "col": 90,
        "row": 6
      },
      {
        "col": 90,
        "row": 34
      },
      {
        "col": 90,
        "row": 62
      },
      {
        "col": 90,
        "row": 90
      },
      {
        "col": 90,
        "row": 118
      },
      {
        "col": 118,
        "row": 6
      },
      {
        "col": 118,
        "row": 34
      },
      {
        "col": 118,
        "row": 62
      },
      {
        "col": 118,
        "row": 90
      },
      {
        "col": 118,
        "row": 118
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1468,
          "reed": 360
        },
        "types": [
          {
            "count": 8,
            "words": {
              "data": 122,
              "reed": 30
            }
          },
          {
            "count": 4,
            "words": {
              "data": 123,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1128,
          "reed": 700
        },
        "types": [
          {
            "count": 22,
            "words": {
              "data": 45,
              "reed": 28
            }
          },
          {
            "count": 3,
            "words": {
              "data": 46,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 808,
          "reed": 1020
        },
        "types": [
          {
            "count": 8,
            "words": {
              "data": 23,
              "reed": 30
            }
          },
          {
            "count": 26,
            "words": {
              "data": 24,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 628,
          "reed": 1200
        },
        "types": [
          {
            "count": 12,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 28,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "28": {
    "number": 28,
    "length": 15371,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 50
      },
      {
        "col": 6,
        "row": 74
      },
      {
        "col": 6,
        "row": 98
      },
      {
        "col": 6,
        "row": 122
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 50
      },
      {
        "col": 26,
        "row": 74
      },
      {
        "col": 26,
        "row": 98
      },
      {
        "col": 26,
        "row": 122
      },
      {
        "col": 50,
        "row": 6
      },
      {
        "col": 50,
        "row": 26
      },
      {
        "col": 50,
        "row": 50
      },
      {
        "col": 50,
        "row": 74
      },
      {
        "col": 50,
        "row": 98
      },
      {
        "col": 50,
        "row": 122
      },
      {
        "col": 74,
        "row": 6
      },
      {
        "col": 74,
        "row": 26
      },
      {
        "col": 74,
        "row": 50
      },
      {
        "col": 74,
        "row": 74
      },
      {
        "col": 74,
        "row": 98
      },
      {
        "col": 74,
        "row": 122
      },
      {
        "col": 98,
        "row": 6
      },
      {
        "col": 98,
        "row": 26
      },
      {
        "col": 98,
        "row": 50
      },
      {
        "col": 98,
        "row": 74
      },
      {
        "col": 98,
        "row": 98
      },
      {
        "col": 98,
        "row": 122
      },
      {
        "col": 122,
        "row": 6
      },
      {
        "col": 122,
        "row": 26
      },
      {
        "col": 122,
        "row": 50
      },
      {
        "col": 122,
        "row": 74
      },
      {
        "col": 122,
        "row": 98
      },
      {
        "col": 122,
        "row": 122
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1531,
          "reed": 390
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 117,
              "reed": 30
            }
          },
          {
            "count": 10,
            "words": {
              "data": 118,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1193,
          "reed": 728
        },
        "types": [
          {
            "count": 3,
            "words": {
              "data": 45,
              "reed": 28
            }
          },
          {
            "count": 23,
            "words": {
              "data": 46,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 871,
          "reed": 1050
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 31,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 661,
          "reed": 1260
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 31,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "29": {
    "number": 29,
    "length": 16411,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 78
      },
      {
        "col": 6,
        "row": 102
      },
      {
        "col": 6,
        "row": 126
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 54
      },
      {
        "col": 30,
        "row": 78
      },
      {
        "col": 30,
        "row": 102
      },
      {
        "col": 30,
        "row": 126
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 30
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 78
      },
      {
        "col": 54,
        "row": 102
      },
      {
        "col": 54,
        "row": 126
      },
      {
        "col": 78,
        "row": 6
      },
      {
        "col": 78,
        "row": 30
      },
      {
        "col": 78,
        "row": 54
      },
      {
        "col": 78,
        "row": 78
      },
      {
        "col": 78,
        "row": 102
      },
      {
        "col": 78,
        "row": 126
      },
      {
        "col": 102,
        "row": 6
      },
      {
        "col": 102,
        "row": 30
      },
      {
        "col": 102,
        "row": 54
      },
      {
        "col": 102,
        "row": 78
      },
      {
        "col": 102,
        "row": 102
      },
      {
        "col": 102,
        "row": 126
      },
      {
        "col": 126,
        "row": 6
      },
      {
        "col": 126,
        "row": 30
      },
      {
        "col": 126,
        "row": 54
      },
      {
        "col": 126,
        "row": 78
      },
      {
        "col": 126,
        "row": 102
      },
      {
        "col": 126,
        "row": 126
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1631,
          "reed": 420
        },
        "types": [
          {
            "count": 7,
            "words": {
              "data": 116,
              "reed": 30
            }
          },
          {
            "count": 7,
            "words": {
              "data": 117,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1267,
          "reed": 784
        },
        "types": [
          {
            "count": 21,
            "words": {
              "data": 45,
              "reed": 28
            }
          },
          {
            "count": 7,
            "words": {
              "data": 46,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 911,
          "reed": 1140
        },
        "types": [
          {
            "count": 1,
            "words": {
              "data": 23,
              "reed": 30
            }
          },
          {
            "count": 37,
            "words": {
              "data": 24,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 701,
          "reed": 1350
        },
        "types": [
          {
            "count": 19,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 26,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "30": {
    "number": 30,
    "length": 17483,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 52
      },
      {
        "col": 6,
        "row": 78
      },
      {
        "col": 6,
        "row": 104
      },
      {
        "col": 6,
        "row": 130
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 52
      },
      {
        "col": 26,
        "row": 78
      },
      {
        "col": 26,
        "row": 104
      },
      {
        "col": 26,
        "row": 130
      },
      {
        "col": 52,
        "row": 6
      },
      {
        "col": 52,
        "row": 26
      },
      {
        "col": 52,
        "row": 52
      },
      {
        "col": 52,
        "row": 78
      },
      {
        "col": 52,
        "row": 104
      },
      {
        "col": 52,
        "row": 130
      },
      {
        "col": 78,
        "row": 6
      },
      {
        "col": 78,
        "row": 26
      },
      {
        "col": 78,
        "row": 52
      },
      {
        "col": 78,
        "row": 78
      },
      {
        "col": 78,
        "row": 104
      },
      {
        "col": 78,
        "row": 130
      },
      {
        "col": 104,
        "row": 6
      },
      {
        "col": 104,
        "row": 26
      },
      {
        "col": 104,
        "row": 52
      },
      {
        "col": 104,
        "row": 78
      },
      {
        "col": 104,
        "row": 104
      },
      {
        "col": 104,
        "row": 130
      },
      {
        "col": 130,
        "row": 6
      },
      {
        "col": 130,
        "row": 26
      },
      {
        "col": 130,
        "row": 52
      },
      {
        "col": 130,
        "row": 78
      },
      {
        "col": 130,
        "row": 104
      },
      {
        "col": 130,
        "row": 130
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1735,
          "reed": 450
        },
        "types": [
          {
            "count": 5,
            "words": {
              "data": 115,
              "reed": 30
            }
          },
          {
            "count": 10,
            "words": {
              "data": 116,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1373,
          "reed": 812
        },
        "types": [
          {
            "count": 19,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 10,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 985,
          "reed": 1200
        },
        "types": [
          {
            "count": 15,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 25,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 745,
          "reed": 1440
        },
        "types": [
          {
            "count": 23,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 25,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "31": {
    "number": 31,
    "length": 18587,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 56
      },
      {
        "col": 6,
        "row": 82
      },
      {
        "col": 6,
        "row": 108
      },
      {
        "col": 6,
        "row": 134
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 56
      },
      {
        "col": 30,
        "row": 82
      },
      {
        "col": 30,
        "row": 108
      },
      {
        "col": 30,
        "row": 134
      },
      {
        "col": 56,
        "row": 6
      },
      {
        "col": 56,
        "row": 30
      },
      {
        "col": 56,
        "row": 56
      },
      {
        "col": 56,
        "row": 82
      },
      {
        "col": 56,
        "row": 108
      },
      {
        "col": 56,
        "row": 134
      },
      {
        "col": 82,
        "row": 6
      },
      {
        "col": 82,
        "row": 30
      },
      {
        "col": 82,
        "row": 56
      },
      {
        "col": 82,
        "row": 82
      },
      {
        "col": 82,
        "row": 108
      },
      {
        "col": 82,
        "row": 134
      },
      {
        "col": 108,
        "row": 6
      },
      {
        "col": 108,
        "row": 30
      },
      {
        "col": 108,
        "row": 56
      },
      {
        "col": 108,
        "row": 82
      },
      {
        "col": 108,
        "row": 108
      },
      {
        "col": 108,
        "row": 134
      },
      {
        "col": 134,
        "row": 6
      },
      {
        "col": 134,
        "row": 30
      },
      {
        "col": 134,
        "row": 56
      },
      {
        "col": 134,
        "row": 82
      },
      {
        "col": 134,
        "row": 108
      },
      {
        "col": 134,
        "row": 134
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1843,
          "reed": 480
        },
        "types": [
          {
            "count": 13,
            "words": {
              "data": 115,
              "reed": 30
            }
          },
          {
            "count": 3,
            "words": {
              "data": 116,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1455,
          "reed": 868
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 29,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1033,
          "reed": 1290
        },
        "types": [
          {
            "count": 42,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 1,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 793,
          "reed": 1530
        },
        "types": [
          {
            "count": 23,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 28,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "32": {
    "number": 32,
    "length": 19723,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 34
      },
      {
        "col": 6,
        "row": 60
      },
      {
        "col": 6,
        "row": 86
      },
      {
        "col": 6,
        "row": 112
      },
      {
        "col": 6,
        "row": 138
      },
      {
        "col": 34,
        "row": 6
      },
      {
        "col": 34,
        "row": 34
      },
      {
        "col": 34,
        "row": 60
      },
      {
        "col": 34,
        "row": 86
      },
      {
        "col": 34,
        "row": 112
      },
      {
        "col": 34,
        "row": 138
      },
      {
        "col": 60,
        "row": 6
      },
      {
        "col": 60,
        "row": 34
      },
      {
        "col": 60,
        "row": 60
      },
      {
        "col": 60,
        "row": 86
      },
      {
        "col": 60,
        "row": 112
      },
      {
        "col": 60,
        "row": 138
      },
      {
        "col": 86,
        "row": 6
      },
      {
        "col": 86,
        "row": 34
      },
      {
        "col": 86,
        "row": 60
      },
      {
        "col": 86,
        "row": 86
      },
      {
        "col": 86,
        "row": 112
      },
      {
        "col": 86,
        "row": 138
      },
      {
        "col": 112,
        "row": 6
      },
      {
        "col": 112,
        "row": 34
      },
      {
        "col": 112,
        "row": 60
      },
      {
        "col": 112,
        "row": 86
      },
      {
        "col": 112,
        "row": 112
      },
      {
        "col": 112,
        "row": 138
      },
      {
        "col": 138,
        "row": 6
      },
      {
        "col": 138,
        "row": 34
      },
      {
        "col": 138,
        "row": 60
      },
      {
        "col": 138,
        "row": 86
      },
      {
        "col": 138,
        "row": 112
      },
      {
        "col": 138,
        "row": 138
      }
    ],
    "levels": [
      {
        "words": {
          "data": 1955,
          "reed": 510
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 115,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1541,
          "reed": 924
        },
        "types": [
          {
            "count": 10,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 23,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1115,
          "reed": 1350
        },
        "types": [
          {
            "count": 10,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 35,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 845,
          "reed": 1620
        },
        "types": [
          {
            "count": 19,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 35,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "33": {
    "number": 33,
    "length": 20891,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 6,
        "row": 86
      },
      {
        "col": 6,
        "row": 114
      },
      {
        "col": 6,
        "row": 142
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 58
      },
      {
        "col": 30,
        "row": 86
      },
      {
        "col": 30,
        "row": 114
      },
      {
        "col": 30,
        "row": 142
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 30
      },
      {
        "col": 58,
        "row": 58
      },
      {
        "col": 58,
        "row": 86
      },
      {
        "col": 58,
        "row": 114
      },
      {
        "col": 58,
        "row": 142
      },
      {
        "col": 86,
        "row": 6
      },
      {
        "col": 86,
        "row": 30
      },
      {
        "col": 86,
        "row": 58
      },
      {
        "col": 86,
        "row": 86
      },
      {
        "col": 86,
        "row": 114
      },
      {
        "col": 86,
        "row": 142
      },
      {
        "col": 114,
        "row": 6
      },
      {
        "col": 114,
        "row": 30
      },
      {
        "col": 114,
        "row": 58
      },
      {
        "col": 114,
        "row": 86
      },
      {
        "col": 114,
        "row": 114
      },
      {
        "col": 114,
        "row": 142
      },
      {
        "col": 142,
        "row": 6
      },
      {
        "col": 142,
        "row": 30
      },
      {
        "col": 142,
        "row": 58
      },
      {
        "col": 142,
        "row": 86
      },
      {
        "col": 142,
        "row": 114
      },
      {
        "col": 142,
        "row": 142
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2071,
          "reed": 540
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 115,
              "reed": 30
            }
          },
          {
            "count": 1,
            "words": {
              "data": 116,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1631,
          "reed": 980
        },
        "types": [
          {
            "count": 14,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 21,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1171,
          "reed": 1440
        },
        "types": [
          {
            "count": 29,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 19,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 901,
          "reed": 1710
        },
        "types": [
          {
            "count": 11,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 46,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "34": {
    "number": 34,
    "length": 22091,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 34
      },
      {
        "col": 6,
        "row": 62
      },
      {
        "col": 6,
        "row": 90
      },
      {
        "col": 6,
        "row": 118
      },
      {
        "col": 6,
        "row": 146
      },
      {
        "col": 34,
        "row": 6
      },
      {
        "col": 34,
        "row": 34
      },
      {
        "col": 34,
        "row": 62
      },
      {
        "col": 34,
        "row": 90
      },
      {
        "col": 34,
        "row": 118
      },
      {
        "col": 34,
        "row": 146
      },
      {
        "col": 62,
        "row": 6
      },
      {
        "col": 62,
        "row": 34
      },
      {
        "col": 62,
        "row": 62
      },
      {
        "col": 62,
        "row": 90
      },
      {
        "col": 62,
        "row": 118
      },
      {
        "col": 62,
        "row": 146
      },
      {
        "col": 90,
        "row": 6
      },
      {
        "col": 90,
        "row": 34
      },
      {
        "col": 90,
        "row": 62
      },
      {
        "col": 90,
        "row": 90
      },
      {
        "col": 90,
        "row": 118
      },
      {
        "col": 90,
        "row": 146
      },
      {
        "col": 118,
        "row": 6
      },
      {
        "col": 118,
        "row": 34
      },
      {
        "col": 118,
        "row": 62
      },
      {
        "col": 118,
        "row": 90
      },
      {
        "col": 118,
        "row": 118
      },
      {
        "col": 118,
        "row": 146
      },
      {
        "col": 146,
        "row": 6
      },
      {
        "col": 146,
        "row": 34
      },
      {
        "col": 146,
        "row": 62
      },
      {
        "col": 146,
        "row": 90
      },
      {
        "col": 146,
        "row": 118
      },
      {
        "col": 146,
        "row": 146
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2191,
          "reed": 570
        },
        "types": [
          {
            "count": 13,
            "words": {
              "data": 115,
              "reed": 30
            }
          },
          {
            "count": 6,
            "words": {
              "data": 116,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1725,
          "reed": 1036
        },
        "types": [
          {
            "count": 14,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 23,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1231,
          "reed": 1530
        },
        "types": [
          {
            "count": 44,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 7,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 961,
          "reed": 1800
        },
        "types": [
          {
            "count": 59,
            "words": {
              "data": 16,
              "reed": 30
            }
          },
          {
            "count": 1,
            "words": {
              "data": 17,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "35": {
    "number": 35,
    "length": 23008,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 78
      },
      {
        "col": 6,
        "row": 102
      },
      {
        "col": 6,
        "row": 126
      },
      {
        "col": 6,
        "row": 150
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 54
      },
      {
        "col": 30,
        "row": 78
      },
      {
        "col": 30,
        "row": 102
      },
      {
        "col": 30,
        "row": 126
      },
      {
        "col": 30,
        "row": 150
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 30
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 78
      },
      {
        "col": 54,
        "row": 102
      },
      {
        "col": 54,
        "row": 126
      },
      {
        "col": 54,
        "row": 150
      },
      {
        "col": 78,
        "row": 6
      },
      {
        "col": 78,
        "row": 30
      },
      {
        "col": 78,
        "row": 54
      },
      {
        "col": 78,
        "row": 78
      },
      {
        "col": 78,
        "row": 102
      },
      {
        "col": 78,
        "row": 126
      },
      {
        "col": 78,
        "row": 150
      },
      {
        "col": 102,
        "row": 6
      },
      {
        "col": 102,
        "row": 30
      },
      {
        "col": 102,
        "row": 54
      },
      {
        "col": 102,
        "row": 78
      },
      {
        "col": 102,
        "row": 102
      },
      {
        "col": 102,
        "row": 126
      },
      {
        "col": 102,
        "row": 150
      },
      {
        "col": 126,
        "row": 6
      },
      {
        "col": 126,
        "row": 30
      },
      {
        "col": 126,
        "row": 54
      },
      {
        "col": 126,
        "row": 78
      },
      {
        "col": 126,
        "row": 102
      },
      {
        "col": 126,
        "row": 126
      },
      {
        "col": 126,
        "row": 150
      },
      {
        "col": 150,
        "row": 6
      },
      {
        "col": 150,
        "row": 30
      },
      {
        "col": 150,
        "row": 54
      },
      {
        "col": 150,
        "row": 78
      },
      {
        "col": 150,
        "row": 102
      },
      {
        "col": 150,
        "row": 126
      },
      {
        "col": 150,
        "row": 150
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2306,
          "reed": 570
        },
        "types": [
          {
            "count": 12,
            "words": {
              "data": 121,
              "reed": 30
            }
          },
          {
            "count": 7,
            "words": {
              "data": 122,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1812,
          "reed": 1064
        },
        "types": [
          {
            "count": 12,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 26,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1286,
          "reed": 1590
        },
        "types": [
          {
            "count": 39,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 14,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 986,
          "reed": 1890
        },
        "types": [
          {
            "count": 22,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 41,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "36": {
    "number": 36,
    "length": 24272,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 24
      },
      {
        "col": 6,
        "row": 50
      },
      {
        "col": 6,
        "row": 76
      },
      {
        "col": 6,
        "row": 102
      },
      {
        "col": 6,
        "row": 128
      },
      {
        "col": 6,
        "row": 154
      },
      {
        "col": 24,
        "row": 6
      },
      {
        "col": 24,
        "row": 24
      },
      {
        "col": 24,
        "row": 50
      },
      {
        "col": 24,
        "row": 76
      },
      {
        "col": 24,
        "row": 102
      },
      {
        "col": 24,
        "row": 128
      },
      {
        "col": 24,
        "row": 154
      },
      {
        "col": 50,
        "row": 6
      },
      {
        "col": 50,
        "row": 24
      },
      {
        "col": 50,
        "row": 50
      },
      {
        "col": 50,
        "row": 76
      },
      {
        "col": 50,
        "row": 102
      },
      {
        "col": 50,
        "row": 128
      },
      {
        "col": 50,
        "row": 154
      },
      {
        "col": 76,
        "row": 6
      },
      {
        "col": 76,
        "row": 24
      },
      {
        "col": 76,
        "row": 50
      },
      {
        "col": 76,
        "row": 76
      },
      {
        "col": 76,
        "row": 102
      },
      {
        "col": 76,
        "row": 128
      },
      {
        "col": 76,
        "row": 154
      },
      {
        "col": 102,
        "row": 6
      },
      {
        "col": 102,
        "row": 24
      },
      {
        "col": 102,
        "row": 50
      },
      {
        "col": 102,
        "row": 76
      },
      {
        "col": 102,
        "row": 102
      },
      {
        "col": 102,
        "row": 128
      },
      {
        "col": 102,
        "row": 154
      },
      {
        "col": 128,
        "row": 6
      },
      {
        "col": 128,
        "row": 24
      },
      {
        "col": 128,
        "row": 50
      },
      {
        "col": 128,
        "row": 76
      },
      {
        "col": 128,
        "row": 102
      },
      {
        "col": 128,
        "row": 128
      },
      {
        "col": 128,
        "row": 154
      },
      {
        "col": 154,
        "row": 6
      },
      {
        "col": 154,
        "row": 24
      },
      {
        "col": 154,
        "row": 50
      },
      {
        "col": 154,
        "row": 76
      },
      {
        "col": 154,
        "row": 102
      },
      {
        "col": 154,
        "row": 128
      },
      {
        "col": 154,
        "row": 154
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2434,
          "reed": 600
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 121,
              "reed": 30
            }
          },
          {
            "count": 14,
            "words": {
              "data": 122,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1914,
          "reed": 1120
        },
        "types": [
          {
            "count": 6,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 34,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1354,
          "reed": 1680
        },
        "types": [
          {
            "count": 46,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 10,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1054,
          "reed": 1980
        },
        "types": [
          {
            "count": 2,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 64,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "37": {
    "number": 37,
    "length": 25568,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 28
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 80
      },
      {
        "col": 6,
        "row": 106
      },
      {
        "col": 6,
        "row": 132
      },
      {
        "col": 6,
        "row": 158
      },
      {
        "col": 28,
        "row": 6
      },
      {
        "col": 28,
        "row": 28
      },
      {
        "col": 28,
        "row": 54
      },
      {
        "col": 28,
        "row": 80
      },
      {
        "col": 28,
        "row": 106
      },
      {
        "col": 28,
        "row": 132
      },
      {
        "col": 28,
        "row": 158
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 28
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 80
      },
      {
        "col": 54,
        "row": 106
      },
      {
        "col": 54,
        "row": 132
      },
      {
        "col": 54,
        "row": 158
      },
      {
        "col": 80,
        "row": 6
      },
      {
        "col": 80,
        "row": 28
      },
      {
        "col": 80,
        "row": 54
      },
      {
        "col": 80,
        "row": 80
      },
      {
        "col": 80,
        "row": 106
      },
      {
        "col": 80,
        "row": 132
      },
      {
        "col": 80,
        "row": 158
      },
      {
        "col": 106,
        "row": 6
      },
      {
        "col": 106,
        "row": 28
      },
      {
        "col": 106,
        "row": 54
      },
      {
        "col": 106,
        "row": 80
      },
      {
        "col": 106,
        "row": 106
      },
      {
        "col": 106,
        "row": 132
      },
      {
        "col": 106,
        "row": 158
      },
      {
        "col": 132,
        "row": 6
      },
      {
        "col": 132,
        "row": 28
      },
      {
        "col": 132,
        "row": 54
      },
      {
        "col": 132,
        "row": 80
      },
      {
        "col": 132,
        "row": 106
      },
      {
        "col": 132,
        "row": 132
      },
      {
        "col": 132,
        "row": 158
      },
      {
        "col": 158,
        "row": 6
      },
      {
        "col": 158,
        "row": 28
      },
      {
        "col": 158,
        "row": 54
      },
      {
        "col": 158,
        "row": 80
      },
      {
        "col": 158,
        "row": 106
      },
      {
        "col": 158,
        "row": 132
      },
      {
        "col": 158,
        "row": 158
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2566,
          "reed": 630
        },
        "types": [
          {
            "count": 17,
            "words": {
              "data": 122,
              "reed": 30
            }
          },
          {
            "count": 4,
            "words": {
              "data": 123,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1992,
          "reed": 1204
        },
        "types": [
          {
            "count": 29,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 14,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1426,
          "reed": 1770
        },
        "types": [
          {
            "count": 49,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 10,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1096,
          "reed": 2100
        },
        "types": [
          {
            "count": 24,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 46,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "38": {
    "number": 38,
    "length": 26896,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 32
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 6,
        "row": 84
      },
      {
        "col": 6,
        "row": 110
      },
      {
        "col": 6,
        "row": 136
      },
      {
        "col": 6,
        "row": 162
      },
      {
        "col": 32,
        "row": 6
      },
      {
        "col": 32,
        "row": 32
      },
      {
        "col": 32,
        "row": 58
      },
      {
        "col": 32,
        "row": 84
      },
      {
        "col": 32,
        "row": 110
      },
      {
        "col": 32,
        "row": 136
      },
      {
        "col": 32,
        "row": 162
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 32
      },
      {
        "col": 58,
        "row": 58
      },
      {
        "col": 58,
        "row": 84
      },
      {
        "col": 58,
        "row": 110
      },
      {
        "col": 58,
        "row": 136
      },
      {
        "col": 58,
        "row": 162
      },
      {
        "col": 84,
        "row": 6
      },
      {
        "col": 84,
        "row": 32
      },
      {
        "col": 84,
        "row": 58
      },
      {
        "col": 84,
        "row": 84
      },
      {
        "col": 84,
        "row": 110
      },
      {
        "col": 84,
        "row": 136
      },
      {
        "col": 84,
        "row": 162
      },
      {
        "col": 110,
        "row": 6
      },
      {
        "col": 110,
        "row": 32
      },
      {
        "col": 110,
        "row": 58
      },
      {
        "col": 110,
        "row": 84
      },
      {
        "col": 110,
        "row": 110
      },
      {
        "col": 110,
        "row": 136
      },
      {
        "col": 110,
        "row": 162
      },
      {
        "col": 136,
        "row": 6
      },
      {
        "col": 136,
        "row": 32
      },
      {
        "col": 136,
        "row": 58
      },
      {
        "col": 136,
        "row": 84
      },
      {
        "col": 136,
        "row": 110
      },
      {
        "col": 136,
        "row": 136
      },
      {
        "col": 136,
        "row": 162
      },
      {
        "col": 162,
        "row": 6
      },
      {
        "col": 162,
        "row": 32
      },
      {
        "col": 162,
        "row": 58
      },
      {
        "col": 162,
        "row": 84
      },
      {
        "col": 162,
        "row": 110
      },
      {
        "col": 162,
        "row": 136
      },
      {
        "col": 162,
        "row": 162
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2702,
          "reed": 660
        },
        "types": [
          {
            "count": 4,
            "words": {
              "data": 122,
              "reed": 30
            }
          },
          {
            "count": 18,
            "words": {
              "data": 123,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 2102,
          "reed": 1260
        },
        "types": [
          {
            "count": 13,
            "words": {
              "data": 46,
              "reed": 28
            }
          },
          {
            "count": 32,
            "words": {
              "data": 47,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1502,
          "reed": 1860
        },
        "types": [
          {
            "count": 48,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 14,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1142,
          "reed": 2220
        },
        "types": [
          {
            "count": 42,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 32,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "39": {
    "number": 39,
    "length": 28256,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 26
      },
      {
        "col": 6,
        "row": 54
      },
      {
        "col": 6,
        "row": 82
      },
      {
        "col": 6,
        "row": 110
      },
      {
        "col": 6,
        "row": 138
      },
      {
        "col": 6,
        "row": 166
      },
      {
        "col": 26,
        "row": 6
      },
      {
        "col": 26,
        "row": 26
      },
      {
        "col": 26,
        "row": 54
      },
      {
        "col": 26,
        "row": 82
      },
      {
        "col": 26,
        "row": 110
      },
      {
        "col": 26,
        "row": 138
      },
      {
        "col": 26,
        "row": 166
      },
      {
        "col": 54,
        "row": 6
      },
      {
        "col": 54,
        "row": 26
      },
      {
        "col": 54,
        "row": 54
      },
      {
        "col": 54,
        "row": 82
      },
      {
        "col": 54,
        "row": 110
      },
      {
        "col": 54,
        "row": 138
      },
      {
        "col": 54,
        "row": 166
      },
      {
        "col": 82,
        "row": 6
      },
      {
        "col": 82,
        "row": 26
      },
      {
        "col": 82,
        "row": 54
      },
      {
        "col": 82,
        "row": 82
      },
      {
        "col": 82,
        "row": 110
      },
      {
        "col": 82,
        "row": 138
      },
      {
        "col": 82,
        "row": 166
      },
      {
        "col": 110,
        "row": 6
      },
      {
        "col": 110,
        "row": 26
      },
      {
        "col": 110,
        "row": 54
      },
      {
        "col": 110,
        "row": 82
      },
      {
        "col": 110,
        "row": 110
      },
      {
        "col": 110,
        "row": 138
      },
      {
        "col": 110,
        "row": 166
      },
      {
        "col": 138,
        "row": 6
      },
      {
        "col": 138,
        "row": 26
      },
      {
        "col": 138,
        "row": 54
      },
      {
        "col": 138,
        "row": 82
      },
      {
        "col": 138,
        "row": 110
      },
      {
        "col": 138,
        "row": 138
      },
      {
        "col": 138,
        "row": 166
      },
      {
        "col": 166,
        "row": 6
      },
      {
        "col": 166,
        "row": 26
      },
      {
        "col": 166,
        "row": 54
      },
      {
        "col": 166,
        "row": 82
      },
      {
        "col": 166,
        "row": 110
      },
      {
        "col": 166,
        "row": 138
      },
      {
        "col": 166,
        "row": 166
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2812,
          "reed": 720
        },
        "types": [
          {
            "count": 20,
            "words": {
              "data": 117,
              "reed": 30
            }
          },
          {
            "count": 4,
            "words": {
              "data": 118,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 2216,
          "reed": 1316
        },
        "types": [
          {
            "count": 40,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 7,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1582,
          "reed": 1950
        },
        "types": [
          {
            "count": 43,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 22,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1222,
          "reed": 2310
        },
        "types": [
          {
            "count": 10,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 67,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  },
  "40": {
    "number": 40,
    "length": 29648,
    "aligns": [
      {
        "col": 6,
        "row": 6
      },
      {
        "col": 6,
        "row": 30
      },
      {
        "col": 6,
        "row": 58
      },
      {
        "col": 6,
        "row": 86
      },
      {
        "col": 6,
        "row": 114
      },
      {
        "col": 6,
        "row": 142
      },
      {
        "col": 6,
        "row": 170
      },
      {
        "col": 30,
        "row": 6
      },
      {
        "col": 30,
        "row": 30
      },
      {
        "col": 30,
        "row": 58
      },
      {
        "col": 30,
        "row": 86
      },
      {
        "col": 30,
        "row": 114
      },
      {
        "col": 30,
        "row": 142
      },
      {
        "col": 30,
        "row": 170
      },
      {
        "col": 58,
        "row": 6
      },
      {
        "col": 58,
        "row": 30
      },
      {
        "col": 58,
        "row": 58
      },
      {
        "col": 58,
        "row": 86
      },
      {
        "col": 58,
        "row": 114
      },
      {
        "col": 58,
        "row": 142
      },
      {
        "col": 58,
        "row": 170
      },
      {
        "col": 86,
        "row": 6
      },
      {
        "col": 86,
        "row": 30
      },
      {
        "col": 86,
        "row": 58
      },
      {
        "col": 86,
        "row": 86
      },
      {
        "col": 86,
        "row": 114
      },
      {
        "col": 86,
        "row": 142
      },
      {
        "col": 86,
        "row": 170
      },
      {
        "col": 114,
        "row": 6
      },
      {
        "col": 114,
        "row": 30
      },
      {
        "col": 114,
        "row": 58
      },
      {
        "col": 114,
        "row": 86
      },
      {
        "col": 114,
        "row": 114
      },
      {
        "col": 114,
        "row": 142
      },
      {
        "col": 114,
        "row": 170
      },
      {
        "col": 142,
        "row": 6
      },
      {
        "col": 142,
        "row": 30
      },
      {
        "col": 142,
        "row": 58
      },
      {
        "col": 142,
        "row": 86
      },
      {
        "col": 142,
        "row": 114
      },
      {
        "col": 142,
        "row": 142
      },
      {
        "col": 142,
        "row": 170
      },
      {
        "col": 170,
        "row": 6
      },
      {
        "col": 170,
        "row": 30
      },
      {
        "col": 170,
        "row": 58
      },
      {
        "col": 170,
        "row": 86
      },
      {
        "col": 170,
        "row": 114
      },
      {
        "col": 170,
        "row": 142
      },
      {
        "col": 170,
        "row": 170
      }
    ],
    "levels": [
      {
        "words": {
          "data": 2956,
          "reed": 750
        },
        "types": [
          {
            "count": 19,
            "words": {
              "data": 118,
              "reed": 30
            }
          },
          {
            "count": 6,
            "words": {
              "data": 119,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 2334,
          "reed": 1372
        },
        "types": [
          {
            "count": 18,
            "words": {
              "data": 47,
              "reed": 28
            }
          },
          {
            "count": 31,
            "words": {
              "data": 48,
              "reed": 28
            }
          }
        ]
      },
      {
        "words": {
          "data": 1666,
          "reed": 2040
        },
        "types": [
          {
            "count": 34,
            "words": {
              "data": 24,
              "reed": 30
            }
          },
          {
            "count": 34,
            "words": {
              "data": 25,
              "reed": 30
            }
          }
        ]
      },
      {
        "words": {
          "data": 1276,
          "reed": 2430
        },
        "types": [
          {
            "count": 20,
            "words": {
              "data": 15,
              "reed": 30
            }
          },
          {
            "count": 61,
            "words": {
              "data": 16,
              "reed": 30
            }
          }
        ]
      }
    ]
  }
}