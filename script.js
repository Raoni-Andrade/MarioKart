const resetGame = () => {
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  
  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  player1.style.backgroundImage = `url(./files/selectPlayer.png)`
  player2.style.backgroundImage = `url(./files/selectPlayer.png)`
};

window.onload = () => {
  const players = document.querySelector('.players');
  const startBtn = document.querySelector('.btn-go');
  const resetBtn = document.querySelector('.btn-reset');
  const audioWinner = document.getElementById('audioWinner');

  players.addEventListener('click', (event) => {
    const selectedPlayer = document.querySelector('.selected')
    if (selectedPlayer) {
      selectedPlayer.classList.remove('selected');
    }
    event.target.classList.add('selected');
  })

  const characters = document.getElementsByClassName('playersImages');

  for (let character of characters) {
    character.addEventListener('click', (event) => {
      const selectedPlayer = document.querySelector('.selected')
    if (selectedPlayer) {
      selectedPlayer.style.backgroundImage = `url(${event.target.src})`;
      selectedPlayer.classList.remove('selected');
    }
    })
  }

  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  startBtn.addEventListener('click', () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + (Math.random() * 200) + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + (Math.random() * 200) + 'px';

    if (parseInt(player1.style.marginLeft) > window.innerWidth) {
      alert('Player 1 won!');
      audioWinner.play();
      audioWinner.volume = 0.2;
      resetGame();      

    } else if (parseInt(player2.style.marginLeft) > window.innerWidth) {
      alert('Player 2 won!');
      audioWinner.play();
      audioWinner.volume = 0.2;
      resetGame();      
    }
  });

  resetBtn.addEventListener('click', resetGame);
}