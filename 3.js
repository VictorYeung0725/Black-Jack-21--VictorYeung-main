// DOM Part
const keep = document.querySelector('#keep');
const hold = document.querySelector('#hold');
const reStart = document.querySelector('#restart');
console.log(keep, hold, reStart);

// initiate a list of 2 - 10, JQK and A * 4, total 52 values - card_list
let J = 10;
let Q = 11;
let K = 12;
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

// random take two cards and assign it to player_list (take meaning remove from the card_list, and put it in player_list)

// SECTION First round for card deliver to player_list

// let randomCardIndex1 = Math.floor(Math.random() * 52);
// console.log(randomCardIndex1);
// player_list.push(card_list[randomCardIndex1]);
// console.log(card_list.length);
// card_list.splice(randomCardIndex1, 1);
// console.log(`the num of card inside player_list : ${player_list.length}`);
// console.log(`the num of card inside card_list : ${card_list.length}`);

// SECTION Second round for card deliver to player_list

// let randomCardIndex2 = Math.floor(Math.random() * 52);
// console.log(randomCardIndex2);
// player_list.push(card_list[randomCardIndex2]);
// console.log(card_list.length);
// card_list.splice(randomCardIndex2, 1);
// console.log(`the num of card inside player_list : ${player_list.length} cards`);
// console.log(`player_list : ${player_list}`);
// console.log(`the num of card inside card_list : ${card_list.length} cards`);

// write First and Second round of card deliver with a function
function cardDeliver() {
  let randomCardIndex = Math.floor(Math.random() * 52);
  console.log(`the card number are ${card_list[randomCardIndex]}`);
  player_list.push(card_list[randomCardIndex]);
  card_list.splice(randomCardIndex, 1);
  console.log(`the num of card inside player_list : ${player_list.length}`);
  console.log(`the num of card inside card_list : ${card_list.length}`);
}

cardDeliver();
cardDeliver();

// in every execution of step 3, check if the value is larger than 21.
let player_Sum = player_list.reduce(function (acc, mark) {
  return acc + mark;
}, 0);
console.log(player_Sum);
if (player_Sum > 21) {
  //  first round 不可以超過21 所以 如果超過21 重新發牌
}

function gameStart() {
  cardDeliver();
  cardDeliver();
  let player_Sum = player_list.reduce(function (acc, mark) {
    return acc + mark;
  }, 0);
  console.log(player_Sum);
  //  first round 不可以超過21 所以 如果超過21 重新發牌
  if (player_Sum < 21) {
  } else {
    player_list = [];
  }
}

//SECTION Simplying reduce function below are simple logic without looping
let sum = 0;
// let firstNum = player_list[0];
// let secondNum = player_list[1];
// let total = firstNum + secondNum;
// console.log(total);
// simple logic with looping the array and add up all num inside the array;
for (let i = 0; i < player_list.length; i++) {
  sum = sum + player_list[i];
}
console.log(sum);

// ask for player input, if he types Y, then give him another card (i.e. Step 3, but instead of 2 cards, give him 1 card only)
alert(`Player You can Chose 繼續發牌 or hold現有`);

// if (sum > 21) {
//   return `Sorry You Card is ${sum}, exceed 21`;
// } else if (sum < 21) {
// }

// Dealer part
// initiate variable called whose_turn
// default it is Player's turn. If it is player's turn, run 3 - 6; otherwise run the step 7 onwards
// when player stops asking for card, dealer needs to get further card if his card value is smaller than 17.
// What if 18 - 20 ?
// BONUS QUESTION
// remaining card, if the proportion of cards remaining has the value of 3 or less is more than 25%, then ask for one more card.
// ending condition: either dealer reaches 21, or over 21, or more than 19 but less than 21.

// Adding eventlistener on the Btn
// keep.addEventListener('click', giveCardPlayer);
// hold.addEventListener('click', giveCardComputer);
// reStart.addEventListener('click', gameStart);
