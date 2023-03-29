import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? John')
    console.log(`Hello ${username}!`)
}