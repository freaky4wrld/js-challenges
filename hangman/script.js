const words = 
['axiom', 'gizmo', 'nymph', 'ivy',
 'kitsch','dwarves','vodka','gnarly','blitz',
  'ivory','voyeurism',  'zodiac','larynx', 'shiv'];

let randomWord = words[Math.floor(Math.random()*words.length)];
const figureParts = document.querySelectorAll('.fig-part');
const wordsDisplay = document.querySelector('#right-word');
const wrongWordsDisplay = document.querySelector('#wrong-words-list');
let wrongWords = [];
let index = 0;
const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz';

const guess = ()=>{
        window.addEventListener('keypress',(e)=>{
            if(allowedCharacters.search(e.key)!== -1){
                if(wrongWords.length<figureParts.length){
                    if(randomWord.search(e.key)!== -1){
                        // console.log(e.key);
                        rightLetters[randomWord.search(e.key)].classList.add('show');
        
                    }else {
                        wrongWordsDisplay.parentElement.classList.remove('hide');
                        if(!wrongWords.includes(e.key)){
                            wrongWords.push(e.key);
                            let currentWord = index===0 || index===figureParts.length ? e.key : `,${e.key}`;
                            displayLetter('wrong-guess',wrongWordsDisplay,currentWord);
                            figureParts[index].classList.remove('fig-part');
                            index++;
                        }else{
                            console.log('repeated word');
                        }
                    }
                }
            }
        })
        if(wrongWords.length==figureParts.length){
            console.log('success');
        }
}

const displayLetter = (className, parentName,content)=>{
    const child = document.createElement('p');
    child.className = className;
    child.innerText = content;
    parentName.appendChild(child);
}

const showblanks =()=>{
    for(let i=0; i<randomWord.length; i++){
        displayLetter('letters',wordsDisplay,randomWord[i]);
    }
}

console.log(randomWord);
showblanks();
const rightLetters = document.querySelectorAll('.letters');
guess();