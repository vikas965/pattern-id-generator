# Pattern ID Generator

A flexible pattern-based random ID generator for Node.js.

## Installation

```bash
npm install pattern-id-generator
```

## Usage

```javascript
const generateId = require('pattern-id-generator');

// Generate single ID
const id = generateId('XX99-AAA');
console.log(id); // Example: "RQ42-PTH"

// Generate multiple IDs
const ids = generateId('AA-999', 5);
console.log(ids); // Example: ["BP-428", "VQ-731", "GD-205", "ME-846", "AJ-392"]
```

## Pattern Syntax

- `A`: Uppercase letter (A-Z)
- `a`: Lowercase letter (a-z)
- `9` or `#`: Digit (0-9)
- `X`: Any alphanumeric character (A-Z, a-z, 0-9)
- `*`: Any character (including special characters)
- Any other character: Used as-is in the pattern

## Examples

```javascript
// License plate style
generateId('AAA-999'); // "BQC-428"

// Product SKU
generateId('PROD-XX-999'); // "PROD-R3-428"

// Password with special chars
generateId('******'); // "hJ4*k!"

// Mixed pattern
generateId('USER-####-AA'); // "USER-5832-QW"
```

## API

### `generateId(pattern, [count])`

- `pattern` (string): The pattern to use for generation
- `count` (number, optional): Number of IDs to generate (default: 1)

Returns: A string if count is 1, or an array of strings if count > 1 .

## License

MIT