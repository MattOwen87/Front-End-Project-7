
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const startOverlay = document.getElementById('overlay');
const letters = document.getElementsByClassName('letter');
const button = document.getElementsByTagName('button');

let missed = 0;

const phrases = ['breaking bad', 'game of thrones', 'true detective', 'the alienist', 'bates motel'];


startButton.addEventListener('click', (event) => {
  startOverlay.style.display = 'none';


});

function getRandomPhraseArray(arr){

const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
const splitPhrase = randomPhrase.split('');

return splitPhrase;

};



const phraseArray = getRandomPhraseArray(phrases);


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

addPhraseToDisplay(phraseArray);



function checkLetter(clicked){
  const guess = clicked.textContent;
  let correctLetter = null;
  for (let i = 0; i < letters.length; i += 1){
    if (letters[i].textContent.toLowerCase() === guess) {
      letters[i].classList.add('show');
     correctLetter = letters[i].textContent;
   }
}
return correctLetter;
};

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



qwerty.addEventListener('click', (event) => {

if (event.target.tagName === 'BUTTON'){
  event.target.classList.add('chosen')
  event.target.setAttribute('disabled', true)
  checkLetter(event.target);

}

  if (checkLetter(event.target) === null){
  const lives = document.querySelector('img');

lives.parentNode.removeChild(lives);
missed += 1;

}

checkWin();
});
