// DOM Part
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
console.log(player, computer);
const message = document.querySelector('#message');

const keep = document.querySelector('#keep');
const hold = document.querySelector('#hold');
const reStart = document.querySelector('#restart');

// initiate a list of 2 - 10, JQK and A * 4, total 52 values - card_list

let burst = false;

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
let cardType = ['C', 'D', 'H', 'S'];

// create player_list
let player_list = [];
let computer_list = [];
let player_sum = 0;
let computer_sum = 0;
let whoseTurn = 1;

// delievry random one card to the player or computer
function cardDeliverToPlayer() {
  let randomCardIndex = Math.floor(Math.random() * card_list.length);
  console.log(`the card number are ${card_list[randomCardIndex]}`);
  player_list.push(card_list[randomCardIndex]);
  card_list.splice(randomCardIndex, 1);
  console.log(`the num of card inside player_list : ${player_list.length}`);
  console.log(`the num of card inside card_list : ${card_list.length}`);
}

function cardDeliverToComputer() {
  let randomCardIndex = Math.floor(Math.random() * card_list.length);
  console.log(`the card number are ${card_list[randomCardIndex]}`);
  computer_list.push(card_list[randomCardIndex]);
  card_list.splice(randomCardIndex, 1);
  console.log(`the num of card inside player_list : ${computer_list.length}`);
  console.log(`the num of card inside card_list : ${card_list.length}`);
}

// player deck setting include card delivery and checking
function player_setting() {
  cardDeliverToPlayer();
  cardDeliverToPlayer();
  player_sum = player_list.reduce((acc, mark) => acc + mark, 0);
  console.log(player_sum);
  addElement(player);
  message.textContent = `???????????????????????? ${player_sum}: ???????????? or Hold?????? `;
  if (player_sum > 21) {
  }
}
// Computer deck setting include card delivery and checking
function computer_setting() {
  cardDeliverToComputer();
  cardDeliverToComputer();
  computer_sum = computer_list.reduce((acc, mark) => acc + mark, 0);
  console.log(computer_sum);
  addElement(computer);
}

function addElement(host) {
  for (let i = 0; i < player_list.length; i++) {
    let cardElements = document.createElement('img');
    console.log(cardElements);
    cardElements.setAttribute(
      'src',
      `./cards/${player_list[i]}-${cardType[i]}.png`
    );
    host.appendChild(cardElements);
  }
}

function oneMoreCard() {
  cardDeliverToPlayer();
  let singleCard = document.createElement('img');
  singleCard.setAttribute(
    'src',
    `./cards/${player_list[Math.random * player_list.length]}-${
      cardType[Math.random * cardType.length]
    }.png`
  );
  player.appendChild(singleCard);
  //check if burst
  if (player_sum > 21) {
    burst = true;
  }
}

// whole game start in this function
function gameStart() {
  //first round ??????player ???????????????21 ?????? ????????????21 ????????????
  player_setting(player);
  computer_setting(computer);
}

// Adding eventlistener on the Btn
keep.addEventListener('click', oneMoreCard);
// hold.addEventListener('click', giveCardComputer);
reStart.addEventListener('click', gameStart);
