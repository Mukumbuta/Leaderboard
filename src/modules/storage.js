import Scores from "./constructor.js";


const getScores = () => {
    let localScores;
    if(!localStorage.getItem('leaderboard')) {
        localScores = [];
    } else {
        localScores = JSON.parse(localStorage.getItem('leaderboard'));
    }

    return localScores;
}

const addScores = (name, score) => {
    const newScore = new Scores(name, score);
    const scores = getScores();
    scores.push(newScore);
    localStorage.setItem('leaderboard', JSON.stringify(scores));
}

export { getScores, addScores };