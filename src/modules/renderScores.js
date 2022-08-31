import { getScores } from './storage.js';

const renderScores = () => {
  const scoresContainer = document.querySelector('.scores-container');
  const allEntries = getScores();
  allEntries.forEach((entry) => {
    const scoreItems = document.createElement('li');
    scoreItems.innerText += `${entry.name}: ${entry.score}`;
    scoresContainer.appendChild(scoreItems);
    return scoresContainer;
  });
};

export default renderScores;
