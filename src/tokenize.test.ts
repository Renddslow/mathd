import test from 'ava';

import tokenize from './tokenize';
import exp from 'constants';

test('tokenize - returns an Array', (t) => {
  t.true(Array.isArray(tokenize('2 + 2')));
});

test('tokenize - returns an Array of tokens', (t) => {
  const actual = tokenize('3 + 4 * 2 / (1-5) ^ 2 ^ 3');
  const expected = ['3', '+', '4', '*', '2', '/', '(', '1', '-', '5', ')', '^', '2', '^', '3'];
  t.deepEqual(actual, expected);
});

test('tokenize - will tokenize correctly for multi-digit numbers', (t) => {
  const actual = tokenize('33 + 1999');
  const expected = ['33', '+', '1999'];
  t.deepEqual(actual, expected);
});

test('tokenize - will tokenize correctly for decimals', (t) => {
  const actual = tokenize('33.333 + 1200');
  const expected = ['33.333', '+', '1200'];
  t.deepEqual(actual, expected);
});
