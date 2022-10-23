// initiate a list of 2 - 10, JQK and A * 4, total 52 values - card_list
// create player_list
// random take two cards and assign it to player_list (take meaning remove from the card_list, and put it in player_list)
// use list index to randomly take cards from the list
// in every execution of step 3, check if the value is larger than 21.
// ask for player input, if he types Y, then give him another card (i.e. Step 3, but instead of 2 cards, give him 1 card only)
// Dealer part
// initiate variable called whose_turn
// default it is Player's turn. If it is player's turn, run 3 - 6; otherwise run the step 7 onwards
// when player stops asking for card, dealer needs to get further card if his card value is smaller than 17.
// What if 18 - 20 ?
// BONUS QUESTION
// remaining card, if the proportion of cards remaining has the value of 3 or less is more than 25%, then ask for one more card.
// ending condition: either dealer reaches 21, or over 21, or more than 19 but less than 21.

//1. list out all the card with its value inside of an array;
let J = 10;
let Q = 11;
let K = 12;
let A = 1;
let deck = [
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
console.log(deck);
//2. create play_list with empty array
let play_list = [];
//3. randomly assign two card to play_list
// let randomNum1 = Math.floor(Math.random() * 52);
// let randomNum2 = Math.floor(Math.random() * 52);

// higher order function for getting two random number // 4.Delete the card assigned to the play_list
function remainCardOnDeck() {
  play_list = [...getMultipleRandom(deck, 2)];
}

function getMultipleRandom(arr, num) {
  const shuffled = arr //[...arr] shadow copying by ES6 spread operator
    //Array.sort method mutates the original array
    .sort(() => 0.5 - Math.random())
    .slice(0, num);
  // .splice(0, num);
  return shuffled;
}

function deletCard() {
  desk.splice();
}
console.log(getMultipleRandom(deck, 2));
console.log(deck.length);

console.log(play_list);

// random number and use it as index inside of deck variable . push it to the play_list array;
// problem 1 how to randomly assing two num into new array
// problem 2 how to remove the two number inside of an array
//
let randomCard;
// play_list.push(deck[randomNum1]);
// play_list.push(deck[randomNum2]);
// for (let i = 0; i < 2; i++) {
//   // deck.splice();
//   // console.log(i);
// }

// console.log(play_list);

// how to delete the item in array
// do we need to resue the array : deck ;
// 1. 抽隨機號碼卡片
// 2. delet 抽出來的卡片 slice? method return a new array without effecting the original array
//檢查 randomCard
