import { sendScores } from '../main_JS/gamesAPICalls';
import Scores from './constructor.js';

const getScores = () => {
  let localScores;
  if (!localStorage.getItem('leaderboard')) {
    localScores = [];
  } else {
    localScores = JSON.parse(localStorage.getItem('leaderboard'));
  }

  return localScores;
};

const addScores = (user, score) => {
  const newScore = new Scores(user, score);
  const scores = getScores();
  scores.push(newScore);
  localStorage.setItem('leaderboard', JSON.stringify(scores));
  sendScores(newScore);
};

export { addScores, getScores };