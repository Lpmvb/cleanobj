const cleanobj = require('../index');

test('clean object', () => {
  const obj = {
    a: 1,
    b: true,
    c: 'string',
    d: {
      a: 1,
      b: { a: {}, b: undefined },
      c: { a: { a: null } },
    },
    e: [null, { a: 1 }, { b: { a: {}, b: undefined } }, [1]],
    f: [{ a: {} }],
    g: [{ [Symbol('foo')]: '1' }, Symbol('xyz')],
    h: Symbol('bar'),
  };
  const exp = {
    a: 1,
    b: true,
    c: 'string',
    d: {
      a: 1,
      c: { a: { a: null } },
    },
    e: [null, { a: 1 }, [1]],
    g: [{ [Symbol('foo')]: '1' }, Symbol('xyz')],
    h: Symbol('bar'),
  };
  const res = cleanobj(obj);
  console.log(require('util').inspect(res, { depth: null }));
  expect(JSON.stringify(res)).toBe(JSON.stringify(exp));
});
