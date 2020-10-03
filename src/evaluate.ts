const CALC = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '^': (a, b) => a ** b,
};

const evaluate = (input: Array<string>) => {
  const value = input.reduce((acc, val) => {
    const number = Number(val);
    if (!isNaN(number)) {
      acc.push(number);
    } else {
      if (acc.length < 2) {
        throw new Error(''); // TODO
      }

      const b = acc.pop();
      const a = acc.pop();
      acc.push(CALC[val](a, b));
    }
    return acc;
  }, []);

  if (value.length > 1) {
    throw new Error('');
  }

  return value[0];
};

export default evaluate;
