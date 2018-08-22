
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const startOverlay = document.getElementById('overlay');
const keyBoard = document.querySelector('.keyrow');
let missed = 0;
const phrases = ['mammals', 'reptiles', 'amphibians', 'birds', 'fish'];


startButton.addEventListener('click', () => {
  startOverlay.style.display = 'none';

});

function getRandomPhraseArray(arr){

const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
const splitPhrase = randomPhrase.split("");

return splitPhrase;

};




function addPhraseToDisplay(arr){

  for (let i = 0; i < arr.length; i += 1){
    const li = document.createElement('li');
    const phrase = document.getElementById('phrase');
    li.textContent = arr[i];
    phrase.appendChild(li);
    if (li.textContent != ' '){
      letters.className = 'letter';
    } else {
      letters.className = 'space';
    }
  }
};

function checkLetter(clicked){

  for (let i = 0; i < letters.length; i += 1){
    const letters = document.getElementsByClassName('letter');
    const button = document.getElementsByTagName('button');
    if (letters[i].textContent.toLowerCase() === button) {
      letters[i].classList.add('show')
      const correctLetter = letters[i].textContent;
      return correctLetter;
    } else {
      return null;
    }
  }
};

keyBoard.addEventListener('click', (event) => {
  event.target.classList.add('chosen')
  event.target.setAttribute('disabled, true')



});
