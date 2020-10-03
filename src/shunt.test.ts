import test from 'ava';

import shunt from './shunt';

test('shunt - returns an Array', (t) => {
  t.true(Array.isArray(shunt([])));
});

test('shunt - "2 + 3 + 4" -> "2 3 + 4 +"', (t) => {
  const actual = shunt(['2', '+', '3', '+', '4']);
  const expected = ['2', '3', '+', '4', '+'];
  t.deepEqual(actual, expected);
});

test('shunt - "3 + 4 × 2 ÷ ( 1 − 5 ) ^ 2 ^ 3" -> "3 4 2 × 1 5 − 2 3 ^ ^ ÷ +"', (t) => {
  const actual = shunt(['3', '+', '4', '*', '2', '/', '(', '1', '-', '5', ')', '^', '2', '^', '3']);
  const expected = ['3', '4', '2', '*', '1', '5', '-', '2', '3', '^', '^', '/', '+'];
  t.deepEqual(actual, expected);
});
