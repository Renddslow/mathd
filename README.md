# mathd

> A small (1.78KB) parser to evaluate infix notation to values (without using eval).

## Install

```
$ yarn add mathd
```

## Usage

```js
import mathd from 'mathd';

mathd('2 + 2');
// => 4
```

## API

### `mathd(expression)`

#### `expression`

- Type: `string`
- Required: ✅

An expression written in infix notation (the way math problems probably looked when you were in elementary school).

### Supported operators

- `+`: Addition
- `-`: Subtraction
- `/`: Division
- `*`: Multiplication
- `^`: Exponents (alias: `**`)

`mathd` alsp supports parentheses for encapsulating expressions.
