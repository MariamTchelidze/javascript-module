let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

const rollDice = document.querySelector(".btn--roll");
const holdScore = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");

const dice = document.querySelector(".dice");
