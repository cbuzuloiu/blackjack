"use strict";

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
  console.log(playerScore);
  displayCardScore.textContent = playerScore;

  // aici ar trebuii sa vina codul daca avem direct 21 si sa se verifice si daca dealerul are 21
}

function calcScroe(value) {
  let score = 0;
  if (Array.isArray(value)) {
    value.forEach((e) => {
      console.log(e[0]);
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

function hit() {
  const card = cards.shift();
  const cardScore = calcScroe(card);
  // console.log(`New card is ${cardScore}`);
  return [cardScore, card];
}

// === START APLICATION ===
const containerPlayerCards = document.querySelector(".player-cards");
let imgCardPlayer = document.querySelectorAll(".player-cards > img");
const imgCardDealer = document.querySelectorAll(".dealer-cards > img");
const btnDealCards = document.querySelector(".deal-cards");
const btnRestartGame = document.querySelector(".restart-game");
const btnHit = document.querySelector(".hit");
const displayCardScore = document.querySelector(".player-card-score");

let playerCards = [];
let dealerCards = [];
let playerScore = 0;

createRandomArray(cards);

btnDealCards.addEventListener("click", () => {
  dealCards();
  btnDealCards.disabled = true;
  // console.log(playerCards);
  // console.log(dealerCards);
  // console.log(cards);
});

btnRestartGame.addEventListener("click", () => {
  cards = [...deckOfCards];
  createRandomArray(cards);
  playerCards = [];
  dealerCards = [];
  playerScore = 0;
  btnDealCards.disabled = false;

  // Reset Display cards for Player
  imgCardPlayer.forEach((element) => {
    element.src = `/Cards/back01.png`;
  });

  // Reset Display cards for Dealer
  imgCardDealer.forEach((element) => {
    element.src = `/Cards/back01.png`;
  });

  displayCardScore.textContent = 0;

  imgCardPlayer = document.querySelectorAll(".player-cards > img");

  for (let i = 2; i < imgCardPlayer.length; i++) {
    imgCardPlayer[i].remove();
  }
});

btnHit.addEventListener("click", () => {
  const hitResult = hit();
  console.log(hitResult);
  playerScore += hitResult[0];
  console.log(playerScore);
  displayCardScore.textContent = playerScore;

  const newImg = document.createElement("img");
  newImg.setAttribute("src", `/Cards/${hitResult[1]}.png`);
  containerPlayerCards.appendChild(newImg);
});

// console.log(cards);
// console.log(`Player cards are: ${playerCards}`);
// console.log(`Dealer cards are: ${dealerCards}`);
// console.log(cards);
