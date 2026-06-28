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