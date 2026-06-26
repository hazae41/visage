export interface VersionInfo {
  /**
   * Version number
   */
  readonly number: number

  /**
   * Total number of bits in the symbol
   */
  readonly length: number

  /**
   * Levels of error correction
   */
  readonly levels: [L: LevelInfo, M: LevelInfo, Q: LevelInfo, H: LevelInfo]
}

export interface LevelInfo {
  /**
   * Number of words in the symbol
   */
  readonly words: WordsInfo

  /**
   * Types of blocks in the symbol
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
    ],
    "length": 208
  },
  "2": {
    "number": 2,
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
    ],
    "length": 359
  },
  "3": {
    "number": 3,
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
    ],
    "length": 567
  },
  "4": {
    "number": 4,
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
    ],
    "length": 807
  },
  "5": {
    "number": 5,
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
    ],
    "length": 1079
  },
  "6": {
    "number": 6,
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
    ],
    "length": 1383
  },
  "7": {
    "number": 7,
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
    ],
    "length": 1568
  },
  "8": {
    "number": 8,
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
    ],
    "length": 1936
  },
  "9": {
    "number": 9,
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
    ],
    "length": 2336
  },
  "10": {
    "number": 10,
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
    ],
    "length": 2768
  },
  "11": {
    "number": 11,
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
    ],
    "length": 3232
  },
  "12": {
    "number": 12,
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
    ],
    "length": 3728
  },
  "13": {
    "number": 13,
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
    ],
    "length": 4256
  },
  "14": {
    "number": 14,
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
    ],
    "length": 4651
  },
  "15": {
    "number": 15,
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
    ],
    "length": 5243
  },
  "16": {
    "number": 16,
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
    ],
    "length": 5867
  },
  "17": {
    "number": 17,
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
    ],
    "length": 6523
  },
  "18": {
    "number": 18,
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
    ],
    "length": 7211
  },
  "19": {
    "number": 19,
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
    ],
    "length": 7931
  },
  "20": {
    "number": 20,
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
    ],
    "length": 8683
  },
  "21": {
    "number": 21,
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
    ],
    "length": 9252
  },
  "22": {
    "number": 22,
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
    ],
    "length": 10068
  },
  "23": {
    "number": 23,
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
    ],
    "length": 10916
  },
  "24": {
    "number": 24,
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
    ],
    "length": 11796
  },
  "25": {
    "number": 25,
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
    ],
    "length": 12708
  },
  "26": {
    "number": 26,
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
    ],
    "length": 13652
  },
  "27": {
    "number": 27,
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
    ],
    "length": 14628
  },
  "28": {
    "number": 28,
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
    ],
    "length": 15371
  },
  "29": {
    "number": 29,
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
    ],
    "length": 16411
  },
  "30": {
    "number": 30,
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
    ],
    "length": 17483
  },
  "31": {
    "number": 31,
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
    ],
    "length": 18587
  },
  "32": {
    "number": 32,
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
    ],
    "length": 19723
  },
  "33": {
    "number": 33,
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
    ],
    "length": 20891
  },
  "34": {
    "number": 34,
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
    ],
    "length": 22091
  },
  "35": {
    "number": 35,
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
    ],
    "length": 23008
  },
  "36": {
    "number": 36,
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
    ],
    "length": 24272
  },
  "37": {
    "number": 37,
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
    ],
    "length": 25568
  },
  "38": {
    "number": 38,
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
    ],
    "length": 26896
  },
  "39": {
    "number": 39,
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
    ],
    "length": 28256
  },
  "40": {
    "number": 40,
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
    ],
    "length": 29648
  }
}