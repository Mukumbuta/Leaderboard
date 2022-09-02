const populateLeaderBoard = (apiData) => {
  const scoresContainer = document.querySelector('.scores-container');
  const records = apiData.result;
  records.forEach((record) => {
    const boardEntry = document.createElement('li');
    boardEntry.innerText += `${record.user}: ${record.score}`;
    scoresContainer.appendChild(boardEntry);
    return scoresContainer;
  });
};

const getAPIData = async () => {
  const reqURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lQ3B2YoHFGegJd9ypQQR/scores/';
  const request = new Request(reqURL);
  const response = await fetch(request);

  const textRecords = await response.text();
  const jsonRecords = JSON.parse(textRecords);
  populateLeaderBoard(jsonRecords);
};

const sendScores = (scoresData) => {
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

export { populateLeaderBoard, getAPIData, sendScores };