import { addScores } from '../modules/storage.js';
import renderScores from '../modules/renderScores.js';
import { getAPIData, sendScores } from './gamesAPICalls.js';
import '../scss/styles.scss';

renderScores();
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const playerName = document.getElementById('player-name').value;
  const playerScore = document.getElementById('player-score').value;
  addScores(playerName, playerScore);
  sendScores();
  window.location.reload();
});

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => {
  getAPIData();
});