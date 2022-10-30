// DOM Part
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
console.log(player, computer);
const message = document.querySelector('#message');

const keep = document.querySelector('#keep');
const hold = document.querySelector('#hold');
const reStart = document.querySelector('#restart');

let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;

let canHit = true; //allows the player (you) to draw while yourSum <= 21

function buildDeck() {
  let values = [
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
  let types = ['C', 'D', 'H', 'S'];
  deck = [];

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + '-' + types[i]); //A-C -> K-C, A-D -> K-D
    }
  }
  console.log(deck);
}

buildDeck();

btnRestart.addEventListener('click', function () {
  randomCard();
  for (let i = 0; i < cardSet.length; i++) {}
  console.log('clicked');
});
