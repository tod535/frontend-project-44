import Game from '../index.js';
import { GetRandomNumber, isEvenNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = GetRandomNumber(0, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default function GameEven() {
  Game(description, getQuestionAndAnswer);
}
