window.onload = () => {
  const players = document.querySelector('.car-section');
  const startBtn = document.querySelector('.btn-go');
  const resetBtn = document.querySelector('.btn-reset');

  players.addEventListener('click', (event) => {
    const selectedPlayer = document.querySelector('.selected')
    if (selectedPlayer) {
      selectedPlayer.classList.remove('selected');
    }
    event.target.classList.add('selected');
  })
}