//VARIABLES

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const startOverlay = document.getElementById('overlay');
const letters = document.getElementsByClassName('letter');
const button = document.querySelectorAll('button');
const score = document.getElementById('scoreboard');
const keyBoard = document.querySelectorAll('.keyrow button');
const tries = document.getElementsByClassName('tries');
const ul = document.getElementsByTagName('ul');
const list = document.querySelectorAll('li');
const lives = document.querySelectorAll('img');
let missed = 0;

//ARRAY

const phrases = ['BREAKING BAD', 'GAME OF THRONES', 'TRUE DETECTIVE', 'THE ALIENIST', 'BATES MOTEL'];

//START NEW GAME EVENT LISTENER

startButton.addEventListener('click', (event) => {

  startOverlay.style.display = 'none';

resetGame();
});

//FUNCTION TO GET RANDOM PHRASE FROM ARRAY

function getRandomPhraseArray(arr){

const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
const splitPhrase = randomPhrase.split('');

return splitPhrase;
};

//FUNCTION TO ADD PHRASE TO THE DISPLAY

function addPhraseToDisplay(arr){

  for (let i = 0; i < arr.length; i += 1){
    const list = document.createElement('li');
    phrase.children[0].appendChild(list);
    list.textContent = arr[i];
    if (arr[i] != ' '){
      list.className = 'letter';
    } else {
      list.className = 'space';
    }
  }
};

//FUNCTION TO CHECK IF THE LETTER CLICKED MATCHES LETTERS IN THE ARRAY

function checkLetter(clicked){
  const guess = clicked.textContent;
  let correctLetter = null;

  for (let i = 0; i < letters.length; i += 1){
    if (letters[i].textContent.toUpperCase() === guess) {
      letters[i].classList.add('show');
     correctLetter = letters[i].textContent;
   }
}
return correctLetter;
};

//FUNCTION TO CHECK IF PLAYER HAS WON OR LOST AND SHOW RELEVANT OVERLAY

function checkWin(){
  const newHeader = document.querySelector('h2');
  const correctGuess = document.getElementsByClassName('show');

  if(letters.length === correctGuess.length){
    startOverlay.style.display = 'flex';
    startOverlay.classList.add('win');
    newHeader.textContent = ('Congratulations, You Win !!!!!!!');
    startButton.textContent =('Try Again');

  } else if(missed >= 5){
    startOverlay.style.display = 'flex';
    startOverlay.classList.add('lose');
    newHeader.textContent = ('Unlucky, You Lose Try Again');
    startButton.textContent =('Try Again');

  }
};

//EVENT LISTENER FOR THE KEYBOARD

qwerty.addEventListener('click', (event) => {

if (event.target.tagName === 'BUTTON'){
  event.target.classList.add('chosen')
  event.target.setAttribute('disabled', true)
  checkLetter(event.target);

}
else{
  return false;
}

if (checkLetter(event.target) === null){

  lives[missed].style.display = 'none';
  missed += 1;
}

  checkWin();
});

//FUNCTION TO RESET THE GAME

function resetGame(){

  let missed = 0;

  for (let i = 0; i < letters.length; i += 1){
      letters[i].classList.remove('show');
      letters[i].style.display = 'none';

    }

for (let i = 0; i < keyBoard.length; i += 1){
  keyBoard[i].classList.remove('chosen')
  keyBoard[i].removeAttribute('disabled')
}

for (let i = 0; i < lives.length; i += 1){
  lives[i].style.display = 'flex';
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

};
