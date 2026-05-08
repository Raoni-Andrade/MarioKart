window.onload = () => {
  const players = document.querySelector('.players');
  const startBtn = document.querySelector('.btn-go');
  const resetBtn = document.querySelector('.btn-reset');

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
}