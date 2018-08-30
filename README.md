# js-clean-obj

[![Build Status](https://travis-ci.org/Lpmvb/cleanobj.svg?branch=master)](https://travis-ci.org/Lpmvb/cleanobj)
[![codecov](https://codecov.io/gh/Lpmvb/cleanobj/branch/master/graph/badge.svg)](https://codecov.io/gh/Lpmvb/cleanobj)

Remove empty and undefined attributes of object.

## install

```bash
npm i -S js-clean-obj
```

## use

```js
const cleanobj = require('js-clean-obj');

const foo = {
  a: 1,
  b: { c: undefined },
  d: [null, { e: true }, { f: {} }]
};

cleanobj(foo);
console.log(foo);
// { a: 1, d: [ null, { e: true } ] }
```