export const createGame = () => {
  const gameName = {
    name: 'Mortal Kombat',
  };
  // "Game with ID: lQ3B2YoHFGegJd9ypQQR added."

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameName),
  })
    .then((response) => response.json())

    .then((gameName) => `Success: ${gameName}`)
    .catch((error) => `Error: ${error}`);
};

export const populateLeaderBoard = (apiData) => {
  const scoresContainer = document.querySelector('.scores-container');
  const records = apiData.result;
  records.forEach((record) => {
    const boardEntry = document.createElement('li');
    boardEntry.innerText += `${record.user}: ${record.score}`;
    scoresContainer.appendChild(boardEntry);
    return scoresContainer;
  });
};

export async function getAPIData() {
  const reqURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lQ3B2YoHFGegJd9ypQQR/scores/';
  const request = new Request(reqURL);
  const response = await fetch(request);

  const textRecords = await response.text();
  const jsonRecords = JSON.parse(textRecords);
  populateLeaderBoard(jsonRecords);
}

export const sendScores = (scoresData) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lQ3B2YoHFGegJd9ypQQR/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoresData),
  })
    .then((response) => response.json())

    .then((scoresData) => `Success: ${scoresData}`)
    .catch((error) => `Error: ${error}`);
};
