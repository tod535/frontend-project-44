import Game from '../index.js';
import { GetRandomNumber } from '../utils.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const GetRandomOperationSumbol = (sumbol) => {
  const sumbolLen = sumbol.length;
  const rundomNum = GetRandomNumber(0, sumbolLen);
  const end = sumbol[rundomNum];
  return end;
};

const calcOperation = (x, y, n) => {
  switch (n) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    default: return null;
  }
};
const getQuestionAndAnswer = () => {
  const rundomOperation = GetRandomOperationSumbol(operationSymbols);
  const firstNum = GetRandomNumber(0, 10);
  const secondNum = GetRandomNumber(0, 10);
  const question = `${firstNum} ${rundomOperation} ${secondNum}`;
  const correctAnswer = String(calcOperation(firstNum, secondNum, rundomOperation));
  return [question, correctAnswer];
};
export default () => {
  Game(description, getQuestionAndAnswer);
};
