import tokenize from './tokenize';
import shunt from './shunt';
import evaluate from './evaluate';

const mathd = (expression: string): number => evaluate(shunt(tokenize(expression)));

export default mathd;
