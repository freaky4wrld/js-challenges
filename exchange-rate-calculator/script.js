const baseValue = document.getElementById('base-currency'); // base-currency options
const exchangeValue = document.getElementById('exchange-currency'); //exchange-currency options
const conversionDisplay = document.getElementById('conversion-rate-display'); // rate-displayer
const swapBtn = document.getElementById('swap-btn'); // swap button
const  inputValue = document.getElementById('base-currency-value'); // base-currency-input
const  displayedValue = document.getElementById('exchange-currency-value'); // exchanged-rate-display


// function carrying the whole functionality of the converter
function apiCall(){
    const xhr = new XMLHttpRequest(); // setting up the object
    xhr.open('GET',"https://open.exchangerate-api.com/v6/latest",true) // setting up connections
    // functionality to perform on successful connection
    xhr.onload = function(){
        if(this.status == 200){
            let currency = JSON.parse(this.responseText); // parsing the object
            createOptions(currency,baseValue); // creating dynamic options for base-currency
            createOptions(currency,exchangeValue); // creating dynamic options for exchanged-currency
            unitConversion(currency) // displaying the conversion formula
            // calculation on providing input 
            inputValue.addEventListener('input',()=>{
                // redundant calculation steps (need to be rectified)
                let converter = currency.rates[baseValue.value];
                let currentvalue = currency.rates[exchangeValue.value];
                inputValue.value = inputValue.value==""? 0: inputValue.value;
                let multiplier = parseInt(inputValue.value) || 0;
                currentvalue = (currentvalue*multiplier)/converter;
                let roundedVal = currentvalue.toFixed(2);
                displayedValue.innerText = roundedVal;
                unitConversion(currency);
            });
            baseValue.addEventListener('change',()=>{
                // redundant calculation steps (need to be rectified)
                let converter = currency.rates[baseValue.value];
                let currentvalue = currency.rates[exchangeValue.value];
                inputValue.value = inputValue.value==""? 0: inputValue.value;
                let multiplier = parseInt(inputValue.value) || 0;
                currentvalue = (currentvalue*multiplier)/converter;
                let roundedVal = currentvalue.toFixed(2);
                displayedValue.innerText = roundedVal;
                unitConversion(currency);
            });
            exchangeValue.addEventListener('change',()=>{
                unitConversion(currency)
            })
            swapBtn.addEventListener('click',()=>{
                // redundant calculation steps (need to be rectified)
                // swapping the currency values
                let temp = baseValue.value;
                baseValue.value = exchangeValue.value;
                exchangeValue.value = temp;
                let converter = currency.rates[baseValue.value];
                let currentvalue = currency.rates[exchangeValue.value];
                inputValue.value = inputValue.value==""? 0: inputValue.value;
                let multiplier = parseInt(inputValue.value) || 0;
                currentvalue = (currentvalue*multiplier)/converter;
                let roundedVal = currentvalue.toFixed(2);
                displayedValue.innerText = roundedVal;
                unitConversion(currency);
            });
        }
    }
    xhr.send();
}

// function to create options for selections with default selections
function createOptions(obj,parentElement){
    let array = Object.keys(obj.rates);
    array.forEach((option)=>{
        let newOption = document.createElement('option');
        newOption.value = option;
        newOption.innerText = option;
        if (parentElement.getAttribute('id') == 'base-currency') {
            if(option == "USD"){newOption.setAttribute('selected',true);}
            parentElement.appendChild(newOption);
            parentElement.nextElementSibling.setAttribute('value',1);
        } else if(parentElement.getAttribute('id')=='exchange-currency'){
            if(option == "EUR"){
                newOption.setAttribute('selected',true);
                parentElement.nextElementSibling.innerText = `${obj.rates[option]}`;
            }    
            parentElement.appendChild(newOption);
        }
    })
}

//function to display the conversion formula
function unitConversion(obj){
    let exchangeDisplayValue = obj.rates[exchangeValue.value]/obj.rates[baseValue.value];
    let roundedVal = exchangeDisplayValue.toFixed(2);
    conversionDisplay.innerText = `1 ${baseValue.value} = ${roundedVal} ${exchangeValue.value}`;
}


// main call
apiCall()