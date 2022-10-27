//declared variable
const btnKeep = document.querySelector('#keep');
const btnRestart = document.querySelector('#restart');
const btnHold = document.querySelector('#hold');

const cardContainer = document.querySelector('.card-container');
const computer = document.querySelector('#computer');
const player = document.querySelector('#player');

const dealerMark = document.querySelector('#dealer-sum');
const playerMark = document.querySelector('#player-sum');

// initialize the begining mark
let dealerSum = 0;
let playerSum = 0;

// set up the status of game
let gameStart = false;
let gameOver = false;

// for special case like card A : 1 or 11;
let dealerAce = 0;
let playerAce = 0;

//create game_board function
let card_board = [];
const createCardDesk = function () {
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

  for (let i = 0; i < card_types.length; i++) {
    for (let j = 0; j < card_values.length; j++) {
      card_board.push(card_values[j] + '-' + card_types[i]);
    }
  }
  console.log(card_board);
};
createCardDesk();

// create two list variable
let Player_list1 = [];
let Player_list2 = [];

function shuffleDeck() {
  for (let i = 0; i < card_board.length; i++) {
    let j = Math.floor(Math.random() * card_board.length); // (0-1) * 52 => (0-51.9999)
    let temp = card_board[i];
    card_board[i] = card_board[j];
    card_board[j] = temp;
  }
  console.log(card_board);
}

shuffleDeck();

// add eventlistener to btn
btnRestart.addEventListener('click', function () {
  randomCard();
  for (let i = 0; i < cardSet.length; i++) {}
  console.log('clicked');
});
