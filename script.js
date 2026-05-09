const resetGame = () => {
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  player1.style.backgroundImage = `url(./files/selectPlayer.png)`;
  player2.style.backgroundImage = `url(./files/selectPlayer.png)`;
};

const randomNumber = () => {
  return (Math.random() * 200);
}

const addP1Score = () => {
  let p1Score = document.getElementById('p1Score');
  p1Score.innerText = +p1Score.innerText + 1;
};

const addP2Score = () => {
  let p2Score = document.getElementById('p2Score');
  p2Score.innerText = +p2Score.innerText + 1;
};

const setScoreBoard = () => {
  const scores = document.querySelectorAll('.score');
  const scoresList = [];

  for (let index = 0; index < scores.length; index += 1) {
    scoresList.push(scores[index].innerText);
  }
    
  localStorage.setItem('scores', JSON.stringify(scoresList));
};

const loadScoreBoard = () => {
  const arrayOfSavedScores = JSON.parse(localStorage.getItem('scores'));
  let scores = document.getElementsByClassName('score');

  if (arrayOfSavedScores) {
    for (let index = 0; index < arrayOfSavedScores.length; index +=1) {
      scores[index].innerText = arrayOfSavedScores[index];
    }
  };
};

const startBtnListener = () => {
  const startBtn = document.querySelector('.btn-go');
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const audioWinner = document.getElementById('audioWinner');

  startBtn.addEventListener('click', () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + randomNumber() + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + randomNumber() + 'px';

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if (player1Win) {
      alert('Player 1 won!');
      audioWinner.play();
      audioWinner.volume = 0.2;
      addP1Score();
      setScoreBoard();
      resetGame();      

    } else if (player2Win) {
      alert('Player 2 won!');
      audioWinner.play();
      audioWinner.volume = 0.2;
      addP2Score();
      setScoreBoard();
      resetGame();      
    }
  });

};

const resetBtnListener = () => {
  const resetBtn = document.querySelector('.btn-reset');
  resetBtn.addEventListener('click', resetGame);
};

const charactersListener = () => {
  const characters = document.getElementsByClassName('playersImages');
  for (let character of characters) {
    character.addEventListener('click', (event) => {
      const selectedPlayer = document.querySelector('.selected')
      if (selectedPlayer) {
        selectedPlayer.style.backgroundImage = `url(${event.target.src})`;
        selectedPlayer.classList.remove('selected');
      }
    });
  }
};

const playersListener = () => {
  const players = document.querySelector('.players');
  players.addEventListener('click', (event) => {
    const selectedPlayer = document.querySelector('.selected')
    if (selectedPlayer) {
      selectedPlayer.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
};

window.onload = () => {
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  startBtnListener();
  resetBtnListener();
  charactersListener();
  playersListener();
  loadScoreBoard();
}