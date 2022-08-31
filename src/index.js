// import _ from 'lodash';
import { add } from 'lodash';
import { addScores } from './modules/storage.js';
import { renderScores } from './modules/renderScores.js';
import './style.css';


renderScores();
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = document.getElementById('player-name').value;
    const playerScore = document.getElementById('player-score').value;
    console.log(playerName)
    addScores(playerName, playerScore);
    window.location.reload();
});