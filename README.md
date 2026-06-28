# Visage

QR code encoding for the web

```bash
npm install @hazae41/visage
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/visage)

## Etymology 

"Visage" is a French noun meaning "face", elements are placed on specific places, and if something is slightly off, the whole face can't be recognized

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

Draw the matrix line by line using modulo two to convert bits into black or empty squares

```tsx
const bitset = new Array(...new Uint8Array(matrix.buffer))

console.log()

for (let row = 0; row < matrix.length; row++)
  console.log(buffer.slice(row * matrix.length, (row + 1) * matrix.length).map(b => b % 2 ? "██" : "  ").join(""))

console.log()
```

Something like this should be displayed

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

#### Canvas

Create an image of width/height `matrix.length`, convert the bits to rgba using modulo two, and then put them on the image

```tsx
const image = new OffscreenCanvas(matrix.length, matrix.length)

const bits = new Uint8Array(matrix.buffer)
const rgba = new ImageData(matrix.length, matrix.length)

for (let i = 0; i < bits.length; i++) {
  rgba.data[i * 4 + 0] = bits[i] % 2 ? 0 : 255
  rgba.data[i * 4 + 1] = bits[i] % 2 ? 0 : 255
  rgba.data[i * 4 + 2] = bits[i] % 2 ? 0 : 255
  rgba.data[i * 4 + 3] = 255
}

image.getContext("2d").putImageData(rgba, 0, 0)
```

Create a destination canvas of desired width/height, disable smoothing, and draw the image on the canvas

```tsx
const canvas = document.createElement("canvas")

canvas.width = 300
canvas.height = 300

canvas.getContext("2d").imageSmoothingEnabled = false
canvas.getContext("2d").drawImage(image, 0, 0, matrix.length, matrix.length, 0, 0, canvas.width, canvas.height)

document.body.append(canvas)
```

You can invert 0 and 255 in the rgba to invert colors for dark mode