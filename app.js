//declared variable
const btnRestart = document.querySelector('#restart');
const btnKeep = document.querySelector('#keep');
const btnHold = document.querySelector('#hold');

const cardContainer = document.querySelector('.card-container');
const computer = document.querySelector('#computer');
const player = document.querySelector('#player');

const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

const unicodeCard = [
  { 'U+1F0A1': '&#127137' },
  { 'U+1F0A2': '&#127138' },
  { 'U+1F0A3': '&#127139' },
  { 'U+1F0A4': '&#127140' },
  { 'U+1F0A5': '&#127141' },
  { 'U+1F0A6': '&#127142' },
  { 'U+1F0A7': '&#127143' },
  { 'U+1F0A8': '&#127144' },
  { 'U+1F0A9': '&#127145' },
  { 'U+1F0AA': '&#127146' },
  { 'U+1F0AB': '&#127147' },
  { 'U+1F0AC': '&#127149' },
  { 'U+1F0AD': '&#127150' },
];

// add eventlistener to three btn, run different function
btnRestart.addEventListener('click', function () {});
