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
    f: [ { a: {} } ],
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
  };
  const res = cleanobj(obj);
  expect(JSON.stringify(res)).toBe(JSON.stringify(exp));
});
