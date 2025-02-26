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

console.log(createRandomArray(cards));
