const words = 
['axiom', 'gizmo', 'nymph', 'ivy', 'jiujitsu',
 'knapsack','kitsch','dwarves','vodka','gnarly','blitz',
  'ivory','voyeurism', 'mnemonic', 'peekaboo', 'voodoo'
   ,'pneumonia', 'witchcraft', 'zodiac', 'espionage',
    'larynx', 'shiv'];

let randomWord = words[Math.floor(Math.random()*words.length)];
const figureParts = document.querySelectorAll('.fig-part');
const wordsDisplay = document.querySelector('#input-area');
const wrongWordsDisplay = document.querySelector('#wrong-words-list');
let wrongWords = [];
let index = 0;
const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz';

const guess = ()=>{
    if(wrongWords.length==figureParts.length){
        console.log('Game Over');
        console.log(randomWord);
    }
    window.addEventListener('keypress',(e)=>{
        if(allowedCharacters.search(e.key)!== -1){
            if(wrongWords.length<figureParts.length){
                if(randomWord.search(e.key)!== -1){
                    console.log(e.key);
                    wordsDisplay.innerText += e.key;
    
                }else {
                    wrongWords.push(e.key);
                    console.log(wrongWords);
                    wrongWordsDisplay.innerText += e.key;
                    figureParts[index].classList.remove('fig-part');
                    index++;
                }
            }
        }
    })
}

guess();