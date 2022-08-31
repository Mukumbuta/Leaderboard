import { getScores } from "./storage"

export const renderScores = () => {
    const scoresContainer = document.querySelector('.scores-container');
    const allEntries = getScores();
    console.log(allEntries)
    allEntries.forEach((entry) => {
        const scoreItems = document.createElement('li')
        console.log(scoreItems)
        scoreItems.innerText += `${entry.name}: ${entry.score}`;
        scoresContainer.appendChild(scoreItems);
        return scoresContainer;
    });   
}

