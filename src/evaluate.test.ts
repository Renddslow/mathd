import test from 'ava';

import evaluate from './evaluate';

test('evaluate - returns a number', (t) => {
  const actual = evaluate(['1', '2', '+']);
  t.false(isNaN(actual));
});

test('evaluate - "1 2 +" -> 3', (t) => {
  const actual = evaluate(['1', '2', '+']);
  t.is(actual, 3);
});

test('evaluate - "3 4 2 × 1 5 − 2 3 ^ ^ ÷ +" -> 3.0001220703125', (t) => {
  const actual = evaluate(['3', '4', '2', '*', '1', '5', '-', '2', '3', '^', '^', '/', '+']);
  t.is(actual, 3.0001220703125);
});
