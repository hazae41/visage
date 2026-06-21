export interface Version {
  readonly number: number
  readonly levels: [Level, Level, Level, Level]
}

export interface Level {
  readonly words: number
  readonly fixes: number
  readonly block: Block[]
}

export interface Block {
  readonly count: number
  readonly words: number
}

export const versions: Record<string, Version> = {
  "1": {
    "number": 1,
    "levels": [
      {
        "words": 19,
        "fixes": 7,
        "block": [
          {
            "count": 1,
            "words": 19
          }
        ]
      },
      {
        "words": 16,
        "fixes": 10,
        "block": [
          {
            "count": 1,
            "words": 16
          }
        ]
      },
      {
        "words": 13,
        "fixes": 13,
        "block": [
          {
            "count": 1,
            "words": 13
          }
        ]
      },
      {
        "words": 9,
        "fixes": 17,
        "block": [
          {
            "count": 1,
            "words": 9
          }
        ]
      }
    ]
  },
  "2": {
    "number": 2,
    "levels": [
      {
        "words": 34,
        "fixes": 10,
        "block": [
          {
            "count": 1,
            "words": 34
          }
        ]
      },
      {
        "words": 28,
        "fixes": 16,
        "block": [
          {
            "count": 1,
            "words": 28
          }
        ]
      },
      {
        "words": 22,
        "fixes": 22,
        "block": [
          {
            "count": 1,
            "words": 22
          }
        ]
      },
      {
        "words": 16,
        "fixes": 28,
        "block": [
          {
            "count": 1,
            "words": 16
          }
        ]
      }
    ]
  },
  "3": {
    "number": 3,
    "levels": [
      {
        "words": 55,
        "fixes": 15,
        "block": [
          {
            "count": 1,
            "words": 55
          }
        ]
      },
      {
        "words": 44,
        "fixes": 26,
        "block": [
          {
            "count": 1,
            "words": 44
          }
        ]
      },
      {
        "words": 34,
        "fixes": 18,
        "block": [
          {
            "count": 2,
            "words": 17
          }
        ]
      },
      {
        "words": 26,
        "fixes": 22,
        "block": [
          {
            "count": 2,
            "words": 13
          }
        ]
      }
    ]
  },
  "4": {
    "number": 4,
    "levels": [
      {
        "words": 80,
        "fixes": 20,
        "block": [
          {
            "count": 1,
            "words": 80
          }
        ]
      },
      {
        "words": 64,
        "fixes": 18,
        "block": [
          {
            "count": 2,
            "words": 32
          }
        ]
      },
      {
        "words": 48,
        "fixes": 26,
        "block": [
          {
            "count": 2,
            "words": 24
          }
        ]
      },
      {
        "words": 36,
        "fixes": 16,
        "block": [
          {
            "count": 4,
            "words": 9
          }
        ]
      }
    ]
  },
  "5": {
    "number": 5,
    "levels": [
      {
        "words": 108,
        "fixes": 26,
        "block": [
          {
            "count": 1,
            "words": 108
          }
        ]
      },
      {
        "words": 86,
        "fixes": 24,
        "block": [
          {
            "count": 2,
            "words": 43
          }
        ]
      },
      {
        "words": 62,
        "fixes": 18,
        "block": [
          {
            "count": 2,
            "words": 15
          },
          {
            "count": 2,
            "words": 16
          }
        ]
      },
      {
        "words": 46,
        "fixes": 22,
        "block": [
          {
            "count": 2,
            "words": 11
          },
          {
            "count": 2,
            "words": 12
          }
        ]
      }
    ]
  },
  "6": {
    "number": 6,
    "levels": [
      {
        "words": 136,
        "fixes": 18,
        "block": [
          {
            "count": 2,
            "words": 68
          }
        ]
      },
      {
        "words": 108,
        "fixes": 16,
        "block": [
          {
            "count": 4,
            "words": 27
          }
        ]
      },
      {
        "words": 76,
        "fixes": 24,
        "block": [
          {
            "count": 4,
            "words": 19
          }
        ]
      },
      {
        "words": 60,
        "fixes": 28,
        "block": [
          {
            "count": 4,
            "words": 15
          }
        ]
      }
    ]
  },
  "7": {
    "number": 7,
    "levels": [
      {
        "words": 156,
        "fixes": 20,
        "block": [
          {
            "count": 2,
            "words": 78
          }
        ]
      },
      {
        "words": 124,
        "fixes": 18,
        "block": [
          {
            "count": 4,
            "words": 31
          }
        ]
      },
      {
        "words": 88,
        "fixes": 18,
        "block": [
          {
            "count": 2,
            "words": 14
          },
          {
            "count": 4,
            "words": 15
          }
        ]
      },
      {
        "words": 66,
        "fixes": 26,
        "block": [
          {
            "count": 4,
            "words": 13
          },
          {
            "count": 1,
            "words": 14
          }
        ]
      }
    ]
  },
  "8": {
    "number": 8,
    "levels": [
      {
        "words": 194,
        "fixes": 24,
        "block": [
          {
            "count": 2,
            "words": 97
          }
        ]
      },
      {
        "words": 154,
        "fixes": 22,
        "block": [
          {
            "count": 2,
            "words": 38
          },
          {
            "count": 2,
            "words": 39
          }
        ]
      },
      {
        "words": 110,
        "fixes": 22,
        "block": [
          {
            "count": 4,
            "words": 18
          },
          {
            "count": 2,
            "words": 19
          }
        ]
      },
      {
        "words": 86,
        "fixes": 26,
        "block": [
          {
            "count": 4,
            "words": 14
          },
          {
            "count": 2,
            "words": 15
          }
        ]
      }
    ]
  },
  "9": {
    "number": 9,
    "levels": [
      {
        "words": 232,
        "fixes": 30,
        "block": [
          {
            "count": 2,
            "words": 116
          }
        ]
      },
      {
        "words": 182,
        "fixes": 22,
        "block": [
          {
            "count": 3,
            "words": 36
          },
          {
            "count": 2,
            "words": 37
          }
        ]
      },
      {
        "words": 132,
        "fixes": 20,
        "block": [
          {
            "count": 4,
            "words": 16
          },
          {
            "count": 4,
            "words": 17
          }
        ]
      },
      {
        "words": 100,
        "fixes": 24,
        "block": [
          {
            "count": 4,
            "words": 12
          },
          {
            "count": 4,
            "words": 13
          }
        ]
      }
    ]
  },
  "10": {
    "number": 10,
    "levels": [
      {
        "words": 274,
        "fixes": 18,
        "block": [
          {
            "count": 2,
            "words": 68
          },
          {
            "count": 2,
            "words": 69
          }
        ]
      },
      {
        "words": 216,
        "fixes": 26,
        "block": [
          {
            "count": 4,
            "words": 43
          },
          {
            "count": 1,
            "words": 44
          }
        ]
      },
      {
        "words": 154,
        "fixes": 24,
        "block": [
          {
            "count": 6,
            "words": 19
          },
          {
            "count": 2,
            "words": 20
          }
        ]
      },
      {
        "words": 122,
        "fixes": 28,
        "block": [
          {
            "count": 6,
            "words": 15
          },
          {
            "count": 2,
            "words": 16
          }
        ]
      }
    ]
  },
  "11": {
    "number": 11,
    "levels": [
      {
        "words": 324,
        "fixes": 20,
        "block": [
          {
            "count": 4,
            "words": 81
          }
        ]
      },
      {
        "words": 254,
        "fixes": 30,
        "block": [
          {
            "count": 1,
            "words": 50
          },
          {
            "count": 4,
            "words": 51
          }
        ]
      },
      {
        "words": 180,
        "fixes": 28,
        "block": [
          {
            "count": 4,
            "words": 22
          },
          {
            "count": 4,
            "words": 23
          }
        ]
      },
      {
        "words": 140,
        "fixes": 24,
        "block": [
          {
            "count": 3,
            "words": 12
          },
          {
            "count": 8,
            "words": 13
          }
        ]
      }
    ]
  },
  "12": {
    "number": 12,
    "levels": [
      {
        "words": 370,
        "fixes": 24,
        "block": [
          {
            "count": 2,
            "words": 92
          },
          {
            "count": 2,
            "words": 93
          }
        ]
      },
      {
        "words": 290,
        "fixes": 22,
        "block": [
          {
            "count": 6,
            "words": 36
          },
          {
            "count": 2,
            "words": 37
          }
        ]
      },
      {
        "words": 206,
        "fixes": 26,
        "block": [
          {
            "count": 4,
            "words": 20
          },
          {
            "count": 6,
            "words": 21
          }
        ]
      },
      {
        "words": 158,
        "fixes": 28,
        "block": [
          {
            "count": 7,
            "words": 14
          },
          {
            "count": 4,
            "words": 15
          }
        ]
      }
    ]
  },
  "13": {
    "number": 13,
    "levels": [
      {
        "words": 428,
        "fixes": 26,
        "block": [
          {
            "count": 4,
            "words": 107
          }
        ]
      },
      {
        "words": 334,
        "fixes": 22,
        "block": [
          {
            "count": 8,
            "words": 37
          },
          {
            "count": 1,
            "words": 38
          }
        ]
      },
      {
        "words": 244,
        "fixes": 24,
        "block": [
          {
            "count": 8,
            "words": 20
          },
          {
            "count": 4,
            "words": 21
          }
        ]
      },
      {
        "words": 180,
        "fixes": 22,
        "block": [
          {
            "count": 12,
            "words": 11
          },
          {
            "count": 4,
            "words": 12
          }
        ]
      }
    ]
  },
  "14": {
    "number": 14,
    "levels": [
      {
        "words": 461,
        "fixes": 30,
        "block": [
          {
            "count": 3,
            "words": 115
          },
          {
            "count": 1,
            "words": 116
          }
        ]
      },
      {
        "words": 365,
        "fixes": 24,
        "block": [
          {
            "count": 4,
            "words": 40
          },
          {
            "count": 5,
            "words": 41
          }
        ]
      },
      {
        "words": 261,
        "fixes": 20,
        "block": [
          {
            "count": 11,
            "words": 16
          },
          {
            "count": 5,
            "words": 17
          }
        ]
      },
      {
        "words": 197,
        "fixes": 24,
        "block": [
          {
            "count": 11,
            "words": 12
          },
          {
            "count": 5,
            "words": 13
          }
        ]
      }
    ]
  },
  "15": {
    "number": 15,
    "levels": [
      {
        "words": 523,
        "fixes": 22,
        "block": [
          {
            "count": 5,
            "words": 87
          },
          {
            "count": 1,
            "words": 88
          }
        ]
      },
      {
        "words": 415,
        "fixes": 24,
        "block": [
          {
            "count": 5,
            "words": 41
          },
          {
            "count": 5,
            "words": 42
          }
        ]
      },
      {
        "words": 295,
        "fixes": 30,
        "block": [
          {
            "count": 5,
            "words": 24
          },
          {
            "count": 7,
            "words": 25
          }
        ]
      },
      {
        "words": 223,
        "fixes": 24,
        "block": [
          {
            "count": 11,
            "words": 12
          },
          {
            "count": 7,
            "words": 13
          }
        ]
      }
    ]
  },
  "16": {
    "number": 16,
    "levels": [
      {
        "words": 589,
        "fixes": 24,
        "block": [
          {
            "count": 5,
            "words": 98
          },
          {
            "count": 1,
            "words": 99
          }
        ]
      },
      {
        "words": 453,
        "fixes": 28,
        "block": [
          {
            "count": 7,
            "words": 45
          },
          {
            "count": 3,
            "words": 46
          }
        ]
      },
      {
        "words": 325,
        "fixes": 24,
        "block": [
          {
            "count": 15,
            "words": 19
          },
          {
            "count": 2,
            "words": 20
          }
        ]
      },
      {
        "words": 253,
        "fixes": 30,
        "block": [
          {
            "count": 3,
            "words": 15
          },
          {
            "count": 13,
            "words": 16
          }
        ]
      }
    ]
  },
  "17": {
    "number": 17,
    "levels": [
      {
        "words": 647,
        "fixes": 28,
        "block": [
          {
            "count": 1,
            "words": 107
          },
          {
            "count": 5,
            "words": 108
          }
        ]
      },
      {
        "words": 507,
        "fixes": 28,
        "block": [
          {
            "count": 10,
            "words": 46
          },
          {
            "count": 1,
            "words": 47
          }
        ]
      },
      {
        "words": 367,
        "fixes": 28,
        "block": [
          {
            "count": 1,
            "words": 22
          },
          {
            "count": 15,
            "words": 23
          }
        ]
      },
      {
        "words": 283,
        "fixes": 28,
        "block": [
          {
            "count": 2,
            "words": 14
          },
          {
            "count": 17,
            "words": 15
          }
        ]
      }
    ]
  },
  "18": {
    "number": 18,
    "levels": [
      {
        "words": 721,
        "fixes": 30,
        "block": [
          {
            "count": 5,
            "words": 120
          },
          {
            "count": 1,
            "words": 121
          }
        ]
      },
      {
        "words": 563,
        "fixes": 26,
        "block": [
          {
            "count": 9,
            "words": 43
          },
          {
            "count": 4,
            "words": 44
          }
        ]
      },
      {
        "words": 397,
        "fixes": 28,
        "block": [
          {
            "count": 17,
            "words": 22
          },
          {
            "count": 1,
            "words": 23
          }
        ]
      },
      {
        "words": 313,
        "fixes": 28,
        "block": [
          {
            "count": 2,
            "words": 14
          },
          {
            "count": 19,
            "words": 15
          }
        ]
      }
    ]
  },
  "19": {
    "number": 19,
    "levels": [
      {
        "words": 795,
        "fixes": 28,
        "block": [
          {
            "count": 3,
            "words": 113
          },
          {
            "count": 4,
            "words": 114
          }
        ]
      },
      {
        "words": 627,
        "fixes": 26,
        "block": [
          {
            "count": 3,
            "words": 44
          },
          {
            "count": 11,
            "words": 45
          }
        ]
      },
      {
        "words": 445,
        "fixes": 26,
        "block": [
          {
            "count": 17,
            "words": 21
          },
          {
            "count": 4,
            "words": 22
          }
        ]
      },
      {
        "words": 341,
        "fixes": 26,
        "block": [
          {
            "count": 9,
            "words": 13
          },
          {
            "count": 16,
            "words": 14
          }
        ]
      }
    ]
  },
  "20": {
    "number": 20,
    "levels": [
      {
        "words": 861,
        "fixes": 28,
        "block": [
          {
            "count": 3,
            "words": 107
          },
          {
            "count": 5,
            "words": 108
          }
        ]
      },
      {
        "words": 669,
        "fixes": 26,
        "block": [
          {
            "count": 3,
            "words": 41
          },
          {
            "count": 13,
            "words": 42
          }
        ]
      },
      {
        "words": 485,
        "fixes": 30,
        "block": [
          {
            "count": 15,
            "words": 24
          },
          {
            "count": 5,
            "words": 25
          }
        ]
      },
      {
        "words": 385,
        "fixes": 28,
        "block": [
          {
            "count": 15,
            "words": 15
          },
          {
            "count": 10,
            "words": 16
          }
        ]
      }
    ]
  },
  "21": {
    "number": 21,
    "levels": [
      {
        "words": 932,
        "fixes": 28,
        "block": [
          {
            "count": 4,
            "words": 116
          },
          {
            "count": 4,
            "words": 117
          }
        ]
      },
      {
        "words": 714,
        "fixes": 26,
        "block": [
          {
            "count": 17,
            "words": 42
          }
        ]
      },
      {
        "words": 512,
        "fixes": 28,
        "block": [
          {
            "count": 17,
            "words": 22
          },
          {
            "count": 6,
            "words": 23
          }
        ]
      },
      {
        "words": 406,
        "fixes": 30,
        "block": [
          {
            "count": 19,
            "words": 16
          },
          {
            "count": 6,
            "words": 17
          }
        ]
      }
    ]
  },
  "22": {
    "number": 22,
    "levels": [
      {
        "words": 1006,
        "fixes": 28,
        "block": [
          {
            "count": 2,
            "words": 111
          },
          {
            "count": 7,
            "words": 112
          }
        ]
      },
      {
        "words": 782,
        "fixes": 28,
        "block": [
          {
            "count": 17,
            "words": 46
          }
        ]
      },
      {
        "words": 568,
        "fixes": 30,
        "block": [
          {
            "count": 7,
            "words": 24
          },
          {
            "count": 16,
            "words": 25
          }
        ]
      },
      {
        "words": 442,
        "fixes": 24,
        "block": [
          {
            "count": 34,
            "words": 13
          }
        ]
      }
    ]
  },
  "23": {
    "number": 23,
    "levels": [
      {
        "words": 1094,
        "fixes": 30,
        "block": [
          {
            "count": 4,
            "words": 121
          },
          {
            "count": 5,
            "words": 122
          }
        ]
      },
      {
        "words": 860,
        "fixes": 28,
        "block": [
          {
            "count": 4,
            "words": 47
          },
          {
            "count": 14,
            "words": 48
          }
        ]
      },
      {
        "words": 614,
        "fixes": 30,
        "block": [
          {
            "count": 11,
            "words": 24
          },
          {
            "count": 14,
            "words": 25
          }
        ]
      },
      {
        "words": 464,
        "fixes": 30,
        "block": [
          {
            "count": 16,
            "words": 15
          },
          {
            "count": 14,
            "words": 16
          }
        ]
      }
    ]
  },
  "24": {
    "number": 24,
    "levels": [
      {
        "words": 1174,
        "fixes": 30,
        "block": [
          {
            "count": 6,
            "words": 117
          },
          {
            "count": 4,
            "words": 118
          }
        ]
      },
      {
        "words": 914,
        "fixes": 28,
        "block": [
          {
            "count": 6,
            "words": 45
          },
          {
            "count": 14,
            "words": 46
          }
        ]
      },
      {
        "words": 664,
        "fixes": 30,
        "block": [
          {
            "count": 11,
            "words": 24
          },
          {
            "count": 16,
            "words": 25
          }
        ]
      },
      {
        "words": 514,
        "fixes": 30,
        "block": [
          {
            "count": 30,
            "words": 16
          },
          {
            "count": 2,
            "words": 17
          }
        ]
      }
    ]
  },
  "25": {
    "number": 25,
    "levels": [
      {
        "words": 1276,
        "fixes": 26,
        "block": [
          {
            "count": 8,
            "words": 106
          },
          {
            "count": 4,
            "words": 107
          }
        ]
      },
      {
        "words": 1000,
        "fixes": 28,
        "block": [
          {
            "count": 8,
            "words": 47
          },
          {
            "count": 13,
            "words": 48
          }
        ]
      },
      {
        "words": 718,
        "fixes": 30,
        "block": [
          {
            "count": 7,
            "words": 24
          },
          {
            "count": 22,
            "words": 25
          }
        ]
      },
      {
        "words": 538,
        "fixes": 30,
        "block": [
          {
            "count": 22,
            "words": 15
          },
          {
            "count": 13,
            "words": 16
          }
        ]
      }
    ]
  },
  "26": {
    "number": 26,
    "levels": [
      {
        "words": 1370,
        "fixes": 28,
        "block": [
          {
            "count": 10,
            "words": 114
          },
          {
            "count": 2,
            "words": 115
          }
        ]
      },
      {
        "words": 1062,
        "fixes": 28,
        "block": [
          {
            "count": 19,
            "words": 46
          },
          {
            "count": 4,
            "words": 47
          }
        ]
      },
      {
        "words": 754,
        "fixes": 28,
        "block": [
          {
            "count": 28,
            "words": 22
          },
          {
            "count": 6,
            "words": 23
          }
        ]
      },
      {
        "words": 596,
        "fixes": 30,
        "block": [
          {
            "count": 33,
            "words": 16
          },
          {
            "count": 4,
            "words": 17
          }
        ]
      }
    ]
  },
  "27": {
    "number": 27,
    "levels": [
      {
        "words": 1468,
        "fixes": 30,
        "block": [
          {
            "count": 8,
            "words": 122
          },
          {
            "count": 4,
            "words": 123
          }
        ]
      },
      {
        "words": 1128,
        "fixes": 28,
        "block": [
          {
            "count": 22,
            "words": 45
          },
          {
            "count": 3,
            "words": 46
          }
        ]
      },
      {
        "words": 808,
        "fixes": 30,
        "block": [
          {
            "count": 8,
            "words": 23
          },
          {
            "count": 26,
            "words": 24
          }
        ]
      },
      {
        "words": 628,
        "fixes": 30,
        "block": [
          {
            "count": 12,
            "words": 15
          },
          {
            "count": 28,
            "words": 16
          }
        ]
      }
    ]
  },
  "28": {
    "number": 28,
    "levels": [
      {
        "words": 1531,
        "fixes": 30,
        "block": [
          {
            "count": 3,
            "words": 117
          },
          {
            "count": 10,
            "words": 118
          }
        ]
      },
      {
        "words": 1193,
        "fixes": 28,
        "block": [
          {
            "count": 3,
            "words": 45
          },
          {
            "count": 23,
            "words": 46
          }
        ]
      },
      {
        "words": 871,
        "fixes": 30,
        "block": [
          {
            "count": 4,
            "words": 24
          },
          {
            "count": 31,
            "words": 25
          }
        ]
      },
      {
        "words": 661,
        "fixes": 30,
        "block": [
          {
            "count": 11,
            "words": 15
          },
          {
            "count": 31,
            "words": 16
          }
        ]
      }
    ]
  },
  "29": {
    "number": 29,
    "levels": [
      {
        "words": 1631,
        "fixes": 30,
        "block": [
          {
            "count": 7,
            "words": 116
          },
          {
            "count": 7,
            "words": 117
          }
        ]
      },
      {
        "words": 1267,
        "fixes": 28,
        "block": [
          {
            "count": 21,
            "words": 45
          },
          {
            "count": 7,
            "words": 46
          }
        ]
      },
      {
        "words": 911,
        "fixes": 30,
        "block": [
          {
            "count": 1,
            "words": 23
          },
          {
            "count": 37,
            "words": 24
          }
        ]
      },
      {
        "words": 701,
        "fixes": 30,
        "block": [
          {
            "count": 19,
            "words": 15
          },
          {
            "count": 26,
            "words": 16
          }
        ]
      }
    ]
  },
  "30": {
    "number": 30,
    "levels": [
      {
        "words": 1735,
        "fixes": 30,
        "block": [
          {
            "count": 5,
            "words": 115
          },
          {
            "count": 10,
            "words": 116
          }
        ]
      },
      {
        "words": 1373,
        "fixes": 28,
        "block": [
          {
            "count": 19,
            "words": 47
          },
          {
            "count": 10,
            "words": 48
          }
        ]
      },
      {
        "words": 985,
        "fixes": 30,
        "block": [
          {
            "count": 15,
            "words": 24
          },
          {
            "count": 25,
            "words": 25
          }
        ]
      },
      {
        "words": 745,
        "fixes": 30,
        "block": [
          {
            "count": 23,
            "words": 15
          },
          {
            "count": 25,
            "words": 16
          }
        ]
      }
    ]
  },
  "31": {
    "number": 31,
    "levels": [
      {
        "words": 1843,
        "fixes": 30,
        "block": [
          {
            "count": 13,
            "words": 115
          },
          {
            "count": 3,
            "words": 116
          }
        ]
      },
      {
        "words": 1455,
        "fixes": 28,
        "block": [
          {
            "count": 2,
            "words": 46
          },
          {
            "count": 29,
            "words": 47
          }
        ]
      },
      {
        "words": 1033,
        "fixes": 30,
        "block": [
          {
            "count": 42,
            "words": 24
          },
          {
            "count": 1,
            "words": 25
          }
        ]
      },
      {
        "words": 793,
        "fixes": 30,
        "block": [
          {
            "count": 23,
            "words": 15
          },
          {
            "count": 28,
            "words": 16
          }
        ]
      }
    ]
  },
  "32": {
    "number": 32,
    "levels": [
      {
        "words": 1955,
        "fixes": 30,
        "block": [
          {
            "count": 17,
            "words": 115
          }
        ]
      },
      {
        "words": 1541,
        "fixes": 28,
        "block": [
          {
            "count": 10,
            "words": 46
          },
          {
            "count": 23,
            "words": 47
          }
        ]
      },
      {
        "words": 1115,
        "fixes": 30,
        "block": [
          {
            "count": 10,
            "words": 24
          },
          {
            "count": 35,
            "words": 25
          }
        ]
      },
      {
        "words": 845,
        "fixes": 30,
        "block": [
          {
            "count": 19,
            "words": 15
          },
          {
            "count": 35,
            "words": 16
          }
        ]
      }
    ]
  },
  "33": {
    "number": 33,
    "levels": [
      {
        "words": 2071,
        "fixes": 30,
        "block": [
          {
            "count": 17,
            "words": 115
          },
          {
            "count": 1,
            "words": 116
          }
        ]
      },
      {
        "words": 1631,
        "fixes": 28,
        "block": [
          {
            "count": 14,
            "words": 46
          },
          {
            "count": 21,
            "words": 47
          }
        ]
      },
      {
        "words": 1171,
        "fixes": 30,
        "block": [
          {
            "count": 29,
            "words": 24
          },
          {
            "count": 19,
            "words": 25
          }
        ]
      },
      {
        "words": 901,
        "fixes": 30,
        "block": [
          {
            "count": 11,
            "words": 15
          },
          {
            "count": 46,
            "words": 16
          }
        ]
      }
    ]
  },
  "34": {
    "number": 34,
    "levels": [
      {
        "words": 2191,
        "fixes": 30,
        "block": [
          {
            "count": 13,
            "words": 115
          },
          {
            "count": 6,
            "words": 116
          }
        ]
      },
      {
        "words": 1725,
        "fixes": 28,
        "block": [
          {
            "count": 14,
            "words": 46
          },
          {
            "count": 23,
            "words": 47
          }
        ]
      },
      {
        "words": 1231,
        "fixes": 30,
        "block": [
          {
            "count": 44,
            "words": 24
          },
          {
            "count": 7,
            "words": 25
          }
        ]
      },
      {
        "words": 961,
        "fixes": 30,
        "block": [
          {
            "count": 59,
            "words": 16
          },
          {
            "count": 1,
            "words": 17
          }
        ]
      }
    ]
  },
  "35": {
    "number": 35,
    "levels": [
      {
        "words": 2306,
        "fixes": 30,
        "block": [
          {
            "count": 12,
            "words": 121
          },
          {
            "count": 7,
            "words": 122
          }
        ]
      },
      {
        "words": 1812,
        "fixes": 28,
        "block": [
          {
            "count": 12,
            "words": 47
          },
          {
            "count": 26,
            "words": 48
          }
        ]
      },
      {
        "words": 1286,
        "fixes": 30,
        "block": [
          {
            "count": 39,
            "words": 24
          },
          {
            "count": 14,
            "words": 25
          }
        ]
      },
      {
        "words": 986,
        "fixes": 30,
        "block": [
          {
            "count": 22,
            "words": 15
          },
          {
            "count": 41,
            "words": 16
          }
        ]
      }
    ]
  },
  "36": {
    "number": 36,
    "levels": [
      {
        "words": 2434,
        "fixes": 30,
        "block": [
          {
            "count": 6,
            "words": 121
          },
          {
            "count": 14,
            "words": 122
          }
        ]
      },
      {
        "words": 1914,
        "fixes": 28,
        "block": [
          {
            "count": 6,
            "words": 47
          },
          {
            "count": 34,
            "words": 48
          }
        ]
      },
      {
        "words": 1354,
        "fixes": 30,
        "block": [
          {
            "count": 46,
            "words": 24
          },
          {
            "count": 10,
            "words": 25
          }
        ]
      },
      {
        "words": 1054,
        "fixes": 30,
        "block": [
          {
            "count": 2,
            "words": 15
          },
          {
            "count": 64,
            "words": 16
          }
        ]
      }
    ]
  },
  "37": {
    "number": 37,
    "levels": [
      {
        "words": 2566,
        "fixes": 30,
        "block": [
          {
            "count": 17,
            "words": 122
          },
          {
            "count": 4,
            "words": 123
          }
        ]
      },
      {
        "words": 1992,
        "fixes": 28,
        "block": [
          {
            "count": 29,
            "words": 46
          },
          {
            "count": 14,
            "words": 47
          }
        ]
      },
      {
        "words": 1426,
        "fixes": 30,
        "block": [
          {
            "count": 49,
            "words": 24
          },
          {
            "count": 10,
            "words": 25
          }
        ]
      },
      {
        "words": 1096,
        "fixes": 30,
        "block": [
          {
            "count": 24,
            "words": 15
          },
          {
            "count": 46,
            "words": 16
          }
        ]
      }
    ]
  },
  "38": {
    "number": 38,
    "levels": [
      {
        "words": 2702,
        "fixes": 30,
        "block": [
          {
            "count": 4,
            "words": 122
          },
          {
            "count": 18,
            "words": 123
          }
        ]
      },
      {
        "words": 2102,
        "fixes": 28,
        "block": [
          {
            "count": 13,
            "words": 46
          },
          {
            "count": 32,
            "words": 47
          }
        ]
      },
      {
        "words": 1502,
        "fixes": 30,
        "block": [
          {
            "count": 48,
            "words": 24
          },
          {
            "count": 14,
            "words": 25
          }
        ]
      },
      {
        "words": 1142,
        "fixes": 30,
        "block": [
          {
            "count": 42,
            "words": 15
          },
          {
            "count": 32,
            "words": 16
          }
        ]
      }
    ]
  },
  "39": {
    "number": 39,
    "levels": [
      {
        "words": 2812,
        "fixes": 30,
        "block": [
          {
            "count": 20,
            "words": 117
          },
          {
            "count": 4,
            "words": 118
          }
        ]
      },
      {
        "words": 2216,
        "fixes": 28,
        "block": [
          {
            "count": 40,
            "words": 47
          },
          {
            "count": 7,
            "words": 48
          }
        ]
      },
      {
        "words": 1582,
        "fixes": 30,
        "block": [
          {
            "count": 43,
            "words": 24
          },
          {
            "count": 22,
            "words": 25
          }
        ]
      },
      {
        "words": 1222,
        "fixes": 30,
        "block": [
          {
            "count": 10,
            "words": 15
          },
          {
            "count": 67,
            "words": 16
          }
        ]
      }
    ]
  },
  "40": {
    "number": 40,
    "levels": [
      {
        "words": 2956,
        "fixes": 30,
        "block": [
          {
            "count": 19,
            "words": 118
          },
          {
            "count": 6,
            "words": 119
          }
        ]
      },
      {
        "words": 2334,
        "fixes": 28,
        "block": [
          {
            "count": 18,
            "words": 47
          },
          {
            "count": 31,
            "words": 48
          }
        ]
      },
      {
        "words": 1666,
        "fixes": 30,
        "block": [
          {
            "count": 34,
            "words": 24
          },
          {
            "count": 34,
            "words": 25
          }
        ]
      },
      {
        "words": 1276,
        "fixes": 30,
        "block": [
          {
            "count": 20,
            "words": 15
          },
          {
            "count": 61,
            "words": 16
          }
        ]
      }
    ]
  }
}