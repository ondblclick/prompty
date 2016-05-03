## prompty

Simple browser prompter (uses window.prompt() method).

## Install

```bash
$ npm install prompty
```

## Usage

```js
const prompty = require('prompty');

cons props = [
  { field: 'name', label: 'Enter your name' },
  { field: 'age', label: 'Enter your age' }
];

var result = prompty(props);
```