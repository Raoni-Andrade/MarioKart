# 🏁 Mario Kart – Mini Racing Game (HTML, CSS & JavaScript)

This project is a **simple Mario Kart–inspired racing game**, built using **vanilla HTML, CSS, and JavaScript**, with no external libraries or frameworks.

The game allows two players to select characters, race with randomized movement, track victories, and persist the scoreboard using **LocalStorage**.

---

## 🎮 Features

- Character selection for each player
- Randomized race movement
- Win detection based on viewport width
- Persistent scoreboard using `localStorage`
- Race reset functionality
- Score reset functionality
- Victory sound effect

---

## 🧠 Technical Concepts Used

- DOM manipulation
- Event listeners
- LocalStorage API
- Pure functions
- Dynamic styling via JavaScript
- Basic state management (players and scores)

---

## 🗂 Project Structure

```text
/
├── index.html
├── styles.css
├── script.js
├── files/
│   ├── mario.png
│   ├── luigi.png
│   ├── peach.png
│   ├── yoshi.png
│   ├── selectPlayer.png
│   ├── corridaMaravilhosa.png
│   └── marioWinner.mp3
```

---

## 🚀 Running the Project Locally

### 1. Clone the Repository

```bash
git clone git@github.com:Raoni-Andrade/MarioKart.git
```

### 2. Open the Project

This project does **not** require any server or dependencies.

Simply open the `index.html` file in your browser

---

### 3. 🕹 How to Play

- Click on a player car (**Player 1** or **Player 2**)
- Click on a character icon to assign it to the selected player
- Click **GO!** to advance the race
- Each click moves both players forward by a random distance
- The first player to pass the screen width wins
- The scoreboard is saved automatically in the browser

---

### 🔘 Available Controls

| Button | Description |
|------|------------|
| **GO!** | Advances both players in the race |
| **RESET** | Resets player positions |
| **RESET SCORE** | Clears saved scores and reloads the page |

---

## 💾 Data Persistence

The victory scores are stored using the browser's `localStorage` API:

```js
localStorage.setItem('scores', JSON.stringify(scores));
