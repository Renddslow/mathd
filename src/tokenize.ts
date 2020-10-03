const TOKENS_WITHOUT_ASTERISK = ['(', ')', '/', '+', '-', '%', '^'];

const tokenize = (value: string): Array<string> => {
  let idx = -1;
  const tokens = [];

  while (++idx < value.length) {
    const char = value[idx];

    if (char === '*') {
      if (idx + 1 < value.length && value[idx + 1] === '*') {
        tokens.push('^'); // alias ** to ^ for exponent
        idx++;
      } else {
        tokens.push(char);
      }
    } else if (TOKENS_WITHOUT_ASTERISK.includes(char)) {
      tokens.push(char);
    } else if (/\s/.test(char)) {
    } else {
      const regexpr = /\d*(\.)?(\d*)?/;
      const valueStartingAtIdx = value.slice(idx);
      const [v] = regexpr.exec(valueStartingAtIdx);
      idx += v.length - 1;
      tokens.push(v);
    }
  }

  return tokens;
};

export default tokenize;
