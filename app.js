//declared variable
const btnRestart = document.querySelector('#restart');
const btnKeep = document.querySelector('#keep');
const btnHold = document.querySelector('#hold');

const cardContainer = document.querySelector('.card-container');
const computer = document.querySelector('#computer');
const player = document.querySelector('#player');

const dealerMark = document.querySelector('#dealer-sum');
const playerMark = document.querySelector('#player-sum');

// initialize the begining mark
let dealerSum = 0;
let playerSum = 0;

// for special case like card A : 1 or 11;
let dealerAce = 0;
let playerAce = 0;

//create game_board function

function game_board() {
  let card_values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  let card_types = ['C', 'D', 'H', 'S'];
  let game_board = [];

  for (let i = 0; i < card_types.length; i++) {
    for (let j = 0; j < card_values.length; j++) {
      game_board.push(card_values[j] + '-' + card_types[i]);
    }
  }
  console.log(game_board);
}
game_board();

// Spades,Hearts,Clubs,Diamonds
// Store 52 card inside the card_list;
// const card_list = [];
// for (let i = 0; i < 52; i++) {
//   card_list.push({
//     card: i,
//   });
// }
// console.log(card_list);

// create two list variable
let Player_list1 = [];
let Player_list2 = [];

// add eventlistener to btn
btnRestart.addEventListener('click', function () {
  randomCard();
  for (let i = 0; i < rardSet.length; i++) {}
  console.log('clicked');
});
