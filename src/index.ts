import pipr from 'pipr';

import tokenize from './tokenize';
import shunt from './shunt';
import evaluate from './evaluate';

const mathd = (value: string): number => evaluate(shunt(tokenize(value)));

export default mathd;
