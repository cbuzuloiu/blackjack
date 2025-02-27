"use strict";

const cards = [
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

// initial 2 cards delt to the player and dealer in order 1 player 1 dealer
function dealCards() {
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
}

// === START APLICATION ===
const imgCardPlayer = document.querySelectorAll(".player-cards > img");
const imgCardDealer = document.querySelectorAll(".player-cards > img");

let playerCards = [];
let dealerCards = [];

createRandomArray(cards);
dealCards();

console.log(cards);
console.log(`Player cards are: ${playerCards}`);
console.log(`Dealer cards are: ${dealerCards}`);
console.log(cards);
