# cleanobj

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