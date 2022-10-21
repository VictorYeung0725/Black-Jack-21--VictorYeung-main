//declared variable
const btnRestart = document.querySelector('#restart');
const btnKeep = document.querySelector('#keep');
const btnHold = document.querySelector('#hold');

const cardContainer = document.querySelector('.card-container');
const computer = document.querySelector('#computer');
const player = document.querySelector('#player');

// cardset = 'Spades' total 52 card
const cardSet1 = {
  A1: '&#127137',
  A2: '&#127138',
  A3: '&#127139',
  A4: '&#127140',
  A5: '&#127141',
  A6: '&#127142',
  A7: '&#127143',
  A8: '&#127144',
  A9: '&#127145',
  AA: '&#127146',
  AB: '&#127147',
  AC: '&#127149',
  AD: '&#127150',
};
// Spades,Hearts,Clubs,Diamonds
// Store 52 card inside the card_list;
const card_list = [];
for (let i = 0; i < 52; i++) {
  card_list.push({
    card: [i],
    mark: [i],
  });
}
console.log(card_list);

// create two list variable
let Player_list1 = [];
let Player_list2 = [];

const randomCard = function () {
  cardArray.forEach(function (cardSet) {
    return cardSet;
  });
};

// add eventlistener to btn
btnRestart.addEventListener('click', function () {
  randomCard();
  for (let i = 0; i < rardSet.length; i++) {}
  console.log('clicked');
});

// create ramdom number between 37-50 except 38
const generateRandomCard = function (min = 37, max = 50) {
  // find diff
  let difference = max - min;
  // generate random number
  let range = Math.random();
  // multiply with difference
  range = Math.floor(range * difference);
  // add with min value
  range = range + min;
  // except the number of 38 because it is not card unicode;
  if (range === 38) {
    return generateRandom();
  } else {
    return range;
  }
};

// generate 52 card
