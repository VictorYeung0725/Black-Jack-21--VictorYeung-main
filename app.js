//declared variable
const btnRestart = document.querySelector('#restart');
const btnKeep = document.querySelector('#keep');
const btnHold = document.querySelector('#hold');

const cardContainer = document.querySelector('.card-container');
const computer = document.querySelector('#computer');
const player = document.querySelector('#player');

// Spades,Hearts,Clubs,Diamonds
// Store 52 card inside the card_list;
const card_list = [];
for (let i = 0; i < 52; i++) {
  card_list.push({
    card: i,
  });
}
console.log(card_list);

// create two list variable
let Player_list1 = [];
let Player_list2 = [];

// add eventlistener to btn
btnRestart.addEventListener('click', function () {
  randomCard();
  for (let i = 0; i < rardSet.length; i++) {}
  console.log('clicked');
});

// generate 52 card
