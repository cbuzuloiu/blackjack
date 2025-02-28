"use strict";
// IN THS GAME VERSION ACE IS ALWAYS 11 POINTS

const deckOfCards = [
  "ah",
  "2h",
  "3h",
  "4h",
  "5h",
  "6h",
  "7h",
  "8h",
  "9h",
  "10h",
  "jh",
  "qh",
  "kh",
  "ad",
  "2d",
  "3d",
  "4d",
  "5d",
  "6d",
  "7d",
  "8d",
  "9d",
  "10d",
  "jd",
  "qd",
  "kd",
  "as",
  "2s",
  "3s",
  "4s",
  "5s",
  "6s",
  "7s",
  "8s",
  "9s",
  "10s",
  "js",
  "qs",
  "ks",
  "ac",
  "2c",
  "3c",
  "4c",
  "5c",
  "6c",
  "7c",
  "8c",
  "9c",
  "10c",
  "jc",
  "qc",
  "kc",
];

let cards = [...deckOfCards];

// shuffleArray
function createRandomArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    // Pick a random index from 0 to i
    let randomNumber = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and and randomNumber
    [arr[i], arr[randomNumber]] = [arr[randomNumber], arr[i]];
  }

  return arr;
}

function dealCards() {
  // initial 2 cards delt to the player and dealer in order 1 player 1 dealer
  for (let i = 0; i <= 3; i++) {
    const card = cards.shift();
    if (i % 2 === 0) {
      playerCards.push(card);
    } else {
      dealerCards.push(card);
    }
  }

  // Display cards for Player
  imgCardPlayer.forEach((element, i) => {
    element.src = `/Cards/${playerCards[i]}.png`;
  });

  // Display cards for Dealer
  imgCardDealer[0].src = `/Cards/${dealerCards[0]}.png`;

  playerScore = calcScroe(playerCards);

  displayCardScorePlayer.textContent = playerScore;
}

function calcScroe(value) {
  let score = 0;
  if (Array.isArray(value)) {
    value.forEach((e) => {
      if (e[0] === "a") {
        score += 11;
      } else if (e[0] === "j" || e[0] === "q" || e[0] === "k" || e[0] === "1") {
        score += 10;
      } else {
        score += Number(e[0]);
      }
    });

    return score;
  } else {
    if (value[0] === "a") {
      score += 11;
    } else if (
      value[0] === "j" ||
      value[0] === "q" ||
      value[0] === "k" ||
      value[0] === "1"
    ) {
      score += 10;
    } else {
      score += Number(value[0]);
    }

    return score;
  }
}

function hitReturnCardScore() {
  const card = cards.shift();
  const cardScore = calcScroe(card);
  return [cardScore, card];
}

function dealerHand() {
  console.log(dealerCards);
  dealerScore = calcScroe(dealerCards);
  console.log(`The dealres scored ${dealerScore}`);

  while (dealerScore < 17) {
    const hitResult = hitReturnCardScore();
    console.log(hitResult);
    dealerScore += hitResult[0];
    console.log(dealerScore);

    const newImg = document.createElement("img");
    newImg.setAttribute("src", `/Cards/${hitResult[1]}.png`);
    containerDealerCards.appendChild(newImg);
  }

  return dealerScore;
}

function restartRound() {
  cards = [...deckOfCards];
  createRandomArray(cards);
  playerCards = [];
  dealerCards = [];
  playerScore = 0;
  dealerScore = 0;
  btnDealCards.disabled = false;

  // Reset Display cards for Player
  imgCardPlayer.forEach((element) => {
    element.src = `/Cards/back01.png`;
  });

  // Reset Display cards for Dealer
  imgCardDealer.forEach((element) => {
    element.src = `/Cards/back01.png`;
  });

  displayCardScorePlayer.textContent = 0;

  imgCardPlayer = document.querySelectorAll(".player-cards > img");

  for (let i = 2; i < imgCardPlayer.length; i++) {
    imgCardPlayer[i].remove();
  }

  imgCardDealer = document.querySelectorAll(".dealer-cards > img");

  for (let i = 2; i < imgCardDealer.length; i++) {
    imgCardDealer[i].remove();
  }

  displayCardScoreDealer.textContent = 0;

  containerWinner.textContent = "";

  // btnHit.disabled = false;
  btnHit.disabled = true;
  btnStand.disabled = true;
  btnRestartGame.disabled = true;
}

// === START APLICATION ===
const containerPlayerCards = document.querySelector(".player-cards");
const containerDealerCards = document.querySelector(".dealer-cards");
const containerWinner = document.querySelector(".winner > h1");
const containerRound = document.querySelector(".round");
const containerPlayerScoreTotal = document.querySelector(".player-score-total");
const containerDealerScoreTotal = document.querySelector(".dealer-score-total");
let imgCardPlayer = document.querySelectorAll(".player-cards > img");
let imgCardDealer = document.querySelectorAll(".dealer-cards > img");
const btnDealCards = document.querySelector(".deal-cards");
const btnStand = document.querySelector(".stand");
const btnRestartGame = document.querySelector(".restart-game");
const btnHit = document.querySelector(".hit");
const displayCardScorePlayer = document.querySelector(".player-card-score");
const displayCardScoreDealer = document.querySelector(".dealer-card-score");

let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;
let playerScoreTotal = 0;
let dealerScoreTotal = 0;
let round = 0;

btnHit.disabled = true;
btnStand.disabled = true;
btnRestartGame.disabled = true;

createRandomArray(cards);

btnDealCards.addEventListener("click", () => {
  dealCards();
  round++;

  containerRound.textContent = round;
  btnHit.disabled = false;
  btnStand.disabled = false;
  btnRestartGame.disabled = false;
  btnDealCards.disabled = true;
});

btnRestartGame.addEventListener("click", () => {
  restartRound();
});

btnHit.addEventListener("click", () => {
  const hitResult = hitReturnCardScore();
  console.log(hitResult);
  playerScore += hitResult[0];
  console.log(playerScore);
  displayCardScorePlayer.textContent = playerScore;

  const newImg = document.createElement("img");
  newImg.setAttribute("src", `/Cards/${hitResult[1]}.png`);
  containerPlayerCards.appendChild(newImg);

  if (playerScore > 21) {
    containerWinner.textContent = "BUST / DEALER WINS";
    dealerScoreTotal++;
    containerDealerScoreTotal.textContent = dealerScoreTotal;
    btnHit.disabled = true;
    btnStand.disabled = true;
  }
});

btnStand.addEventListener("click", () => {
  // Display cards for Dealer
  imgCardDealer[1].src = `/Cards/${dealerCards[1]}.png`;
  dealerScore = dealerHand();
  console.log(`PLAYER: ${playerScore}`);
  console.log(`DEALER: ${dealerScore}`);
  displayCardScoreDealer.textContent = dealerScore;

  if (dealerScore > 21) {
    playerScoreTotal++;
    containerPlayerScoreTotal.textContent = playerScoreTotal;
    containerWinner.textContent = "PLAYER WINS";
  } else if (playerScore > dealerScore) {
    playerScoreTotal++;
    containerPlayerScoreTotal.textContent = playerScoreTotal;
    containerWinner.textContent = "PLAYER WINS";
  } else if (playerScore < dealerScore) {
    dealerScoreTotal++;
    containerDealerScoreTotal.textContent = dealerScoreTotal;
    containerWinner.textContent = "DEALER WINS";
  } else {
    containerWinner.textContent = "DRAW";
  }

  btnHit.disabled = true;
  btnStand.disabled = true;
});
