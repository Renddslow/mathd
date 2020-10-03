const PRECEDENCE = {
  ')': 5,
  '(': 5,
  '^': 4,
  '*': 3,
  '/': 3,
  '+': 2,
  '-': 2,
};

const shunt = (input: Array<string>) => {
  const output = [];
  const operatorStack = [];
  const operators = Object.keys(PRECEDENCE);

  for (const token of input) {
    const isOperator = operators.includes(token);
    const topOperator = operatorStack.length ? operatorStack[operatorStack.length - 1] : '';

    if (isOperator) {
      const currentTokenHasLowerPrecedence = PRECEDENCE[token] <= (PRECEDENCE[topOperator] || 0);
      const topTokenIsNotOpenParen = topOperator !== '(';
      const rightToLeft = topOperator === '^' && token === '^';
      if (currentTokenHasLowerPrecedence && topTokenIsNotOpenParen && !rightToLeft) {
        output.push(operatorStack.pop());
      }

      if (token === ')') {
        let op;
        do {
          op = operatorStack.pop();
          if (op !== '(') {
            output.push(op);
          }
        } while (op !== '(');
      } else {
        operatorStack.push(token);
      }
    } else {
      output.push(token);
    }
  }

  if (operatorStack.length) {
    output.push(...operatorStack.reverse());
  }

  return output;
};

export default shunt;
