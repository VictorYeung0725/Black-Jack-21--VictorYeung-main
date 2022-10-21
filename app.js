//declared variable
const btnRestart = document.querySelector('#restart');
const btnKeep = document.querySelector('#keep');
const btnHold = document.querySelector('#hold');

const cardContainer = document.querySelector('.card-container');
const computer = document.querySelector('#computer');
const player = document.querySelector('#player');

const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

const unicodeCard = [
  { unicode: 'U+1F0A1' },
  { unicode: 'U+1F0A2' },
  { unicode: 'U+1F0A3' },
  { unicode: 'U+1F0A4' },
  { unicode: 'U+1F0A5' },
  { unicode: 'U+1F0A6' },
  { unicode: 'U+1F0A7' },
  { unicode: 'U+1F0A8' },
  { unicode: 'U+1F0A9' },
  { unicode: 'U+1F0AA' },
  { unicode: 'U+1F0AB' },
  { unicode: 'U+1F0AC' },
  { unicode: 'U+1F0AD' },
];

// add eventlistener to three btn, run different function
btnRestart.addEventListener('click', function () {});
