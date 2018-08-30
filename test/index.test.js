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
  cleanobj(obj);
  expect(JSON.stringify(obj)).toBe(JSON.stringify(exp));
});
