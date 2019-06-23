[![Build Status](https://travis-ci.org/pelevesque/substitute-substrings.svg?branch=master)](https://travis-ci.org/pelevesque/substitute-substrings)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/substitute-substrings/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/substitute-substrings?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# substitute-substrings

Substitutes substrings.

## Node Repository

https://www.npmjs.com/package/@pelevesque/substitute-substrings

## Installation

`npm install @pelevesque/substitute-substrings`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring

```js
const substituteSubstrings = require('@pelevesque/substitute-substrings')
```

### Single Substitution

```js
const str = 'abbc'
const substitutions = ['b', '2']
const result = substituteSubstrings(str, substitutions)
// result === 'a22c'
```

Substrings are not swapped like with https://github.com/pelevesque/swap-substrings

```js
const str = 'ac'
const substitutions = ['a', 'c']
const result = substituteSubstrings(str, substitutions)
// result === 'cc'
```

### Multiple Substitutions

```js
const str = 'abbcabcc'
const substitutions = [
  ['a', '1'],
  ['b', '2'],
  ['c', '3']
]
const result = substituteSubstrings(str, substitutions)
// result === '12231233'
```

```js
const str = 'a long stormy night and a little boy named jim'
const substitutions = [
  ['a ', 'the '],
  ['night', 'day'],
  ['jim', 'oscar'],
  ['long', 'short'],
  ['little', 'very tall']
]
const result = substituteSubstrings(str, substitutions)
// result === 'the short stormy day and the very tall boy named oscar'
```
