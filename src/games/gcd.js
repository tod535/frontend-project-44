import Game from '../index.js';
import { GetRandomNumber } from '../utils.js';

const description3 = 'Find the greatest common divisor of given numbers';
const GCD = (f, s) => {
  if (f === 0 || s === 0) {
    return f + s;
  }
  if (f > s) {
    return GCD(f - s, s);
  }
  return GCD(f, s - f);
};
const getQuestionAndAnswer = () => {
  const fNum = GetRandomNumber(1, 100);
  const sNum = GetRandomNumber(1, 100);

  const question = `${fNum} ${sNum}`;
  const correctAnswer = String(GCD(fNum, sNum));
  return [question, correctAnswer];
};
export default function GameGcd() {
  Game(description3, getQuestionAndAnswer);
}
