function apiCall(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"https://open.exchangerate-api.com/v6/latest",true);
    console.log(xhr);
    xhr.onload = function(){
        if(this.status == 200){
            let currency = JSON.parse(this.responseText);
            // console.log(currency)
            // console.log(currency.base_code)
            // console.log(currency.rates)
            // console.log(Object.keys(currency.rates))
            // console.log(Object.values(currency.rates))
            createOptions(currency)
            createOptionsX(currency)
        }
    }
    xhr.send();
}

apiCall();


function createOptions(obj){
    let array = Object.keys(obj.rates);
    array.forEach((option)=>{
        let newOption = document.createElement('option');
        newOption.value = option;
        newOption.innerText = option;
        if(option == "USD"){newOption.setAttribute('selected',true);}
        document.getElementById('base-currency').appendChild(newOption)
        document.getElementById('base-currency-value').setAttribute('value',1)
        
    })
}

function createOptionsX(obj){
    let array = Object.keys(obj.rates);
    array.forEach((option)=>{
        let newOption = document.createElement('option');
        newOption.value = option;
        newOption.innerText = option;
        if(option == "EUR"){
            newOption.setAttribute('selected',true);
            document.getElementById('exchange-currency-value').setAttribute('value',`${obj.rates[option]}`)
        }
        document.getElementById('exchange-currency').appendChild(newOption)
        
    })
}