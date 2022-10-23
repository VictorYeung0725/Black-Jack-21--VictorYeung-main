// DOM Part
const keep = document.querySelector('#keep');
const hold = document.querySelector('#hold');
const reStart = document.querySelector('#restart');
console.log(keep, hold, reStart);

// initiate a list of 2 - 10, JQK and A * 4, total 52 values - card_list
let J = 10;
let Q = 10;
let K = 10;
let A = 1;
let card_list = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  J,
  Q,
  K,
  A,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  J,
  Q,
  K,
  A,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  J,
  Q,
  K,
  A,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  J,
  Q,
  K,
  A,
];
console.log(card_list);

// create player_list
let player_list = [];
let computer_list = [];
let player_sum = 0;
let computer_sum = 0;
let whoseTurn = 1;

// delievry random one card to the player or computer
function cardDeliver() {
  let randomCardIndex = Math.floor(Math.random() * 52);
  console.log(`the card number are ${card_list[randomCardIndex]}`);
  player_list.push(card_list[randomCardIndex]);
  card_list.splice(randomCardIndex, 1);
  console.log(`the num of card inside player_list : ${player_list.length}`);
  console.log(`the num of card inside card_list : ${card_list.length}`);
}

// player deck setting include card delivery and checking
function player_setting() {
  cardDeliver();
  cardDeliver();
  player_sum = player_list.reduce((acc, mark) => acc + mark, 0);
  console.log(player_sum);
}
// Computer deck setting include card delivery and checking
function computer_setting() {
  cardDeliver();
  cardDeliver();
  computer_sum = computer_list.reduce((acc, mark) => acc + mark, 0);
  console.log(computer_sum);
}

// whole game start in this function
function gameStart() {
  //first round 檢查player 不可以超過21 所以 如果超過21 重新發牌
  player_setting();
  computer_setting();
  if (player_sum > 21 || computer_sum > 21) {
    player_list = [];
    computer_list = [];
    player_setting();
    computer_setting();
  } else if (player_sum < 6 || computer_sum < 6) {
    cardDeliver();
  }
}

// Adding eventlistener on the Btn
// keep.addEventListener('click', giveCardPlayer);
// hold.addEventListener('click', giveCardComputer);
reStart.addEventListener('click', gameStart);
