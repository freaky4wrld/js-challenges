const words = 
['axiom', 'gizmo', 'nymph', 'ivy',
 'kitsch','dwarves','vodka','gnarly','blitz',
  'ivory','voyeurism',  'zodiac','larynx', 'shiv'];

let randomWord = words[Math.floor(Math.random()*words.length)];
const figureParts = document.querySelectorAll('.fig-part');
const wordsDisplay = document.querySelector('#right-word');
const wrongWordsDisplay = document.querySelector('#wrong-words-list');
const repeatPrompt = document.querySelector('#repeat-prompt');
const endPrompt = document.querySelector('#game-end-prompt');
const playAgainBtn = document.querySelector('#play-again');
let wrongWords = [];
let correctWords = [];
let index = 0;
let endPromptMessage = 'Unfortunately you lost !!😈';
const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz';
const finalResultShow = ()=>{
    console.log('finalResult is called');
    if(correctWords.length==randomWord.length){
        endPromptMessage = 'Congratulations you won!!😇';
    }
    if(wrongWords.length==figureParts.length || correctWords.length==randomWord.length){
        playAgainBtn.previousElementSibling.innerText = endPromptMessage;
        endPrompt.style.display = 'flex';
    }   
    
    
}

const guess = ()=>{
        window.addEventListener('keypress',(e)=>{
            if(allowedCharacters.search(e.key)!== -1){
                if(wrongWords.length<figureParts.length){
                    if(randomWord.search(e.key)!== -1){
                        if(!correctWords.includes(e.key)){
                            rightLetters[randomWord.search(e.key)].classList.add('show');
                            correctWords.push(e.key);
                        }
                    }else {
                        wrongWordsDisplay.parentElement.classList.remove('hide');
                        if(!wrongWords.includes(e.key)){
                            wrongWords.push(e.key);
                            let currentWord = index===0 || index===figureParts.length ? e.key : `,${e.key}`;
                            displayLetter('wrong-guess',wrongWordsDisplay,currentWord);
                            figureParts[index].classList.remove('fig-part');
                            index++;
                        }
                    }
                }
            }
            finalResultShow();
        })

}

const displayLetter = (className, parentName,content)=>{
    const child = document.createElement('p');
    child.className = className;
    child.innerText = content;
    parentName.appendChild(child);
}

const showblanks =()=>{
    let wordsDisplay = document.querySelector('#right-word');
    for(let i=0; i<randomWord.length; i++){
        displayLetter('letters',wordsDisplay,randomWord[i]);
    }
}
const  reset = ()=>{
    let wrongWordsList = document.getElementById("wrong-words-list");
    while (wrongWordsList.firstChild) {
        wrongWordsList.removeChild(wrongWordsList.firstChild);
    }
    const parentWrong = document.querySelector('.wrong-guess');
    parentWrong.classList.add('hide');
    let rightWordsList = document.getElementById('right-word');
    while(rightWordsList.firstChild){
        rightWordsList.removeChild(rightWordsList.firstChild);
    }


}
console.log(randomWord);
showblanks();
let rightLetters = document.querySelectorAll('.letters');
guess();

playAgainBtn.addEventListener('click',()=>{
    endPrompt.style.display = 'none';
    reset();
    randomWord = words[Math.floor(Math.random()*words.length)];
    console.log(randomWord)
    wrongWords.length = 0;
    correctWords.length = 0;
    showblanks();
    rightLetters = document.querySelectorAll('.letters');
    index = 0;
    endPromptMessage = 'Unfortunately you lost !!😈';
})



