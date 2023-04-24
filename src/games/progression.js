import Game from '../index.js';
import { GetRandomNumber } from '../utils.js';

const progressionLength = 10;

const description = 'What number is missing in the progression?';

const getProgression = () => {
  let progressNum = GetRandomNumber(0, 50);
  const steps = GetRandomNumber(2, 5);
  const progres = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progres.push(progressNum);
    progressNum += steps;
  }
  return progres;
};

const getQuestionAndAnswer = () => {
  const progres = getProgression();
  const randomIndex = GetRandomNumber(0, progressionLength);
  const correctAnswer = String(progres[randomIndex]);
  progres[randomIndex] = '..';
  const question = progres;
  return [question, correctAnswer];
};
export default function GameProgression() {
  Game(description, getQuestionAndAnswer);
}
