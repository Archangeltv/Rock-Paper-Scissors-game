const rockPlayer = document.querySelector(".rockPlayer"),
  paperPlayer = document.querySelector(".paperPlayer"),
  scissorsPlayer = document.querySelector(".scissorsPlayer"),
  nextBtn = document.querySelector(".next"),
  pick = document.querySelector(".pick"),
  playerGame = document.querySelector(".playerGame"),
  winner = document.querySelector(".winner"),
  rematchBtn = document.querySelector(".rematch"),
  computer = document.querySelector(".computer"),
  compMove = document.querySelector(".compMove"),
  player = document.querySelector(".player"),
  computerGame = document.querySelector(".computerGame");
let check = "";

function rematch() {
  playerGame.hidden = true;
  computer.style.display = "none";
  rematchBtn.hidden = true;
  winner.hidden = true;
  playerGame.style.display = "none";
  nextBtn.hidden = false;
  pick.innerHTML = "Pick One";
  scissorsPlayer.classList.remove("focus");
  paperPlayer.classList.remove("focus");
  rockPlayer.classList.remove("focus");
  nextBtn.disabled = true;
}

rematch();

scissorsPlayer.onclick = () => {
  scissorsPlayer.classList.add("focus");
  paperPlayer.classList.remove("focus");
  rockPlayer.classList.remove("focus");
  nextBtn.disabled = false;
  playerGame.innerHTML = '<img src="scissors.png" />';
  checking(scissorsPlayer);
};

paperPlayer.onclick = () => {
  scissorsPlayer.classList.remove("focus");
  paperPlayer.classList.add("focus");
  rockPlayer.classList.remove("focus");
  nextBtn.disabled = false;
  playerGame.innerHTML = '<img src="paper.png" />';
  checking(paperPlayer);
};

rockPlayer.onclick = () => {
  scissorsPlayer.classList.remove("focus");
  paperPlayer.classList.remove("focus");
  rockPlayer.classList.add("focus");
  nextBtn.disabled = false;
  playerGame.innerHTML = '<img src="rock.png" />';
  checking(rockPlayer);
};

function checking(param) {
  check = param.id;
  return check;
}

nextBtn.onclick = () => {
  playerGame.hidden = false;
  computer.style.display = "flex";
  rematchBtn.hidden = false;
  winner.hidden = false;
  nextBtn.hidden = true;
  playerGame.style.display = "flex";
  pick.innerHTML = `You chose ${check}`;
  randomNumber();
  game();
};

rematchBtn.onclick = () => {
  rematch();
};

function randomNumber() {
  let rand = Math.floor(Math.random() * 3);
  let compGame = "";
  if (rand === 0) {
    compGame = "Rock";
    computerGame.innerHTML = '<img src="rock.png" />';
  }
  if (rand === 1) {
    compGame = "Paper";
    computerGame.innerHTML = '<img src="paper.png" />';
  }
  if (rand === 2) {
    compGame = "Scissors";
    computerGame.innerHTML = '<img src="scissors.png" />';
  }
  compMove.innerHTML = `Computer chose ${compGame}`;
  return compGame;
}

function game() {
  let gameCheck = randomNumber();
  if (gameCheck === "Rock" && check === "Rock") {
    winner.innerHTML = `It is a draw`;
  }
  if (gameCheck === "Paper" && check === "Paper") {
    winner.innerHTML = `It is a draw`;
  }
  if (gameCheck === "Scissors" && check === "Scissors") {
    winner.innerHTML = `It is a draw`;
  }
  if (gameCheck === "Rock" && check === "Paper") {
    winner.innerHTML = `YOU WIN`;
  }
  if (gameCheck === "Rock" && check === "Scissors") {
    winner.innerHTML = `YOU LOSE`;
  }
  if (gameCheck === "Paper" && check === "Rock") {
    winner.innerHTML = `YOU LOSE`;
  }
  if (gameCheck === "Paper" && check === "Scissors") {
    winner.innerHTML = `YOU WIN`;
  }
  if (gameCheck === "Scissors" && check === "Paper") {
    winner.innerHTML = `YOU LOSE`;
  }
  if (gameCheck === "Scissors" && check === "Rock") {
    winner.innerHTML = `YOU WIN`;
  }
}
