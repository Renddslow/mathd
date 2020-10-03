import test from 'ava';

import mathd from './index';

test('mathd - "2 + 3" -> 5', (t) => {
  t.is(mathd('2 + 3'), 5);
});

test('mathd - "2 * 3" -> 6', (t) => {
  t.is(mathd('2 * 3'), 6);
});

test('mathd - "6 / 3" -> 2', (t) => {
  t.is(mathd('6 / 3'), 2);
});

test('mathd - "2 - 3" -> -1', (t) => {
  t.is(mathd('2 - 3'), -1);
});
