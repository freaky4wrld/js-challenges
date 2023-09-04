const selectWeightUnit = document.querySelector('select'); // get the weight units
const outputConversion = document.getElementById('output'); // output the conversion
//result-display in the card
const gramsDisplay = document.getElementById('gmOutput');
const kilosDisplay = document.getElementById('kgOutput');
const ouncesDisplay = document.getElementById('ozOutput');
//card-selectors
const grams  = document.getElementById('grams');
const kilos  = document.getElementById('kilos');
const ounces  = document.getElementById('ounces');
outputConversion.style.visibility = 'hidden' // hide the output of conversion

//perform calculations on providing input
document.getElementById('lbsInput').addEventListener('input',(e)=>{
    outputConversion.style.visibility = 'visible'
    let weight = e.target.value;
    switch (selectWeightUnit.selectedIndex) {
        case 0:
        case 1:
            fromPounds(weight)                
            break;
        case 2:
            fromGrams(weight)
            break;
        case 3:
            fromKilos(weight)
            break;
        case 4:
            fromOunces(weight)
            break;
        default:
            break;
    }
})

// toggle cards and show result on the current input
selectWeightUnit.addEventListener('change',()=>{
    let weight = document.getElementById('lbsInput').value //get the input value
    //get the selected weight unit
    switch (selectWeightUnit.selectedIndex) {
        case 0:
        case 1:
            if(poundExist()){
                // card-toggling
                hideWeight(document.getElementById('pounds'))
                showWeight(grams)
                showWeight(kilos)
                showWeight(ounces)
                // calculations
                fromPounds(weight)
            }
            else{
                // card-toggling
                showWeight(grams)
                showWeight(kilos)
                showWeight(ounces)
            }
            break;
            fromPounds(weight)
        case 2:
            if(poundExist()){
                // card-toggling
                hideWeight(grams)
                showWeight(document.getElementById('pounds'))
                poundColor('#0275d8 ') // card color change
                showWeight(ounces)
                showWeight(kilos)
                //calculations
                fromGrams(weight)
            }else{
                //card creation
                createPoundsCard()
                hideWeight(grams)
                showWeight(document.getElementById('pounds'))
                showWeight(ounces)
                showWeight(kilos)
                poundColor('#0275d8 ')
                fromGrams(weight)
            }
            break;
        case 3:
            if(poundExist()){
                hideWeight(kilos)
                showWeight(document.getElementById('pounds'))
                showWeight(ounces)
                showWeight(grams)
                poundColor('#5cb85c ')
                fromKilos(weight)
            }else{
                createPoundsCard()
                hideWeight(kilos)
                showWeight(document.getElementById('pounds'))
                showWeight(ounces)
                showWeight(grams)
                poundColor('#5cb85c ')
                fromKilos(weight)
            }
            break;
        case 4:
            if(poundExist()){
                hideWeight(ounces)
                showWeight(document.getElementById('pounds'))
                showWeight(kilos)
                showWeight(grams)
                poundColor('#d9534f ')
                fromOunces(weight)
            }else{
                createPoundsCard()
                hideWeight(ounces)
                showWeight(document.getElementById('pounds'))
                showWeight(kilos)
                showWeight(grams)
                poundColor('#d9534f ')
                fromOunces(weight)
            }
            break;
        default:
            break;
    }
})

// weight calculation functions
function fromPounds(lbs){
    gramsDisplay.innerText = `${lbs/0.002046}`
    kilosDisplay.innerText = `${lbs/2.2046}`
    ouncesDisplay.innerText = `${lbs*16}`
}

function fromGrams(gm){
    let lbs = document.getElementById('lbsOutput')
    lbs.innerText = `${gm*0.00220462}`
    kilosDisplay.innerText = `${gm/1000}`
    ouncesDisplay.innerText = `${gm*0.035274}`
}

function fromKilos(kg){
    let lbs = document.getElementById('lbsOutput')
    lbs.innerText = `${kg*2.20462}`
    gramsDisplay.innerText = `${kg*1000}`
    ouncesDisplay.innerText = `${kg*35.274}`
}
function fromOunces(oz){
    let lbs = document.getElementById('lbsOutput')
    lbs.innerText = `${oz*0.0625}`
    gramsDisplay.innerText = `${oz*28.3495}`
    kilosDisplay.innerText = `${oz*0.0283495}`
}

// function to create the Pound card
function createPoundsCard(){
    const card = document.createElement('div')
    card.classList.add('card','bg-primary','text-white','mb-2')
    card.setAttribute('id','pounds')
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    const title = document.createElement('h4')
    title.innerText = 'Pounds:'
    title.className = 'card-title'
    const text = document.createElement('div')
    text.className = 'card-text'
    text.setAttribute('id','lbsOutput')
    cardBody.appendChild(title)
    cardBody.appendChild(text)
    card.appendChild(cardBody)
    outputConversion.appendChild(card)
}

// check if the Pound card exists in the output
function poundExist(){
    if(outputConversion.lastElementChild.getAttribute('id')=='pounds'){
        return true
    }else{
        return false
    }
}

// hiding a specific card
function hideWeight(weight){
    weight.style.display = 'none'
}
// showing a specific card
function showWeight(weight){
    weight.style.display = 'block'
}
// changing the Pound card color
function poundColor(color){
    document.getElementById('pounds').classList.remove('bg-primary')
    document.getElementById('pounds').style.backgroundColor = `${color}`
}