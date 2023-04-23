import Game from '../index.js';
import { GetRandomNumber } from '../utils.js';

const description4 = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = GetRandomNumber(2, 50);
  const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default function gemePrime() {
  Game(description4, getQuestionAndAnswer);
}
