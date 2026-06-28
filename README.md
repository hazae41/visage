# Visage

QR code encoding for the web

```bash
npm install @hazae41/visage
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/visage)

## Features

### Current features
- 100% TypeScript and ESM
- No external dependencies
- Rust-like patterns

## Usage 

### Encoding

#### Bytes

```tsx
const buffer = new Uint8Array(...)
const matrix = new QrEncoder("byte").encode(buffer)
```

#### Bytes (UTF-8)

```tsx
const buffer = new TextEncoder().encode("Hello world!")
const matrix = new QrEncoder("byte").encode(buffer)
```

#### Alphanumeric

```tsx
const matrix = new QrEncoder("alphanumeric").encode("HELLO WORLD 123")
```

#### Numeric

```tsx
const matrix = new QrEncoder("numeric").encode("123456")
```

#### Kanji

```tsx
const matrix = new QrEncoder("kanji").encode([...])
```

### Printing

#### Console

```tsx
const bitset = new Array(...new Uint8Array(matrix.buffer))

console.log()

for (let row = 0; row < matrix.length; row++)
  console.log(buffer.slice(row * matrix.length, (row + 1) * matrix.length).map(b => b % 2 ? "██" : "  ").join(""))

console.log()
```

```
██████████████  ██          ██████████████
██          ██  ████  ████  ██          ██
██  ██████  ██  ████████    ██  ██████  ██
██  ██████  ██    ████      ██  ██████  ██
██  ██████  ██  ████  ████  ██  ██████  ██
██          ██      ██      ██          ██
██████████████  ██  ██  ██  ██████████████
                  ██                      
██    ██████████████  ██  ██    ██  ██████
    ██  ████    ██      ████████  ████    
    ██████████      ████████        ██████
██    ████      ██    ██████    ██  ████  
██████    ████        ██████  ████    ██  
                ██████  ██      ██  ██  ██
██████████████  ██      ██  ████████      
██          ██  ██    ██  ████  ██  ██  ██
██  ██████  ██  ████████████      ██  ██  
██  ██████  ██  ████          ██  ████    
██  ██████  ██    ████  ████    ██████████
██          ██    ██████    ████  ████████
██████████████  ████      ██████          
```