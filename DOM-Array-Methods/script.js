let usersArray = [];
const displayArea = document.getElementById('users-display');
const addUserBtn = document.getElementById('add-user');
const moneyDoubleBtn = document.getElementById('double-money');
const showMillionairesBtn = document.getElementById('show-millonaires');
const sortRichBtn = document.getElementById('sort');
const totalBtn = document.getElementById('total-wealth');
function generateUser(){
    let newObject = {name: '',wealth: ''};
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/', true);
    xhr.onload = function(){
        if(this.status == 200){
            let jsonObj = JSON.parse(this.responseText);
            newObject.name = `${jsonObj.results[0].name.first} ${jsonObj.results[0].name.last}`;
            newObject.wealth = Math.floor(Math.random()*1000000);
        }
    }
    xhr.send();
    usersArray.push(newObject);
}


function addDefaultUser(){
    for(let i=0; i<3; i++){
        generateUser();
    }
}

addDefaultUser();

setTimeout(showDefault, 1000);

addUserBtn.addEventListener('click', ()=>{
    removeDefault();
    generateUser();
    setTimeout(showDefault, 1000);
})

moneyDoubleBtn.addEventListener('click', moneyDouble);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortRichBtn.addEventListener('click', sortRichest);
totalBtn.addEventListener('click', totalWealth);

function showDefault(){
    usersArray.forEach(user=>{
        createHTML(user)
    })
}

function createHTML(user){
        let row = document.createElement('div');
        row.classList.add('row','child');
        let nameCol = document.createElement('div');
        nameCol.classList.add('col','bold');
        nameCol.innerText = user.name;
        let wealthCol = document.createElement('div');
        wealthCol.classList.add('col','normal');
        wealthCol.innerText = `$ ${user.wealth}`;
        row.appendChild(nameCol);
        row.appendChild(wealthCol);
        displayArea.appendChild(row);
}


function moneyDouble(){
    removeDefault();
    usersArray = usersArray.map((user)=>{
        user.wealth = 2*user.wealth;
        return user;
    })
    showDefault();
   
}


function showMillionaires(){
    removeDefault();
    usersArray = usersArray.filter(user=>user.wealth>1000000);
    showDefault();
}

function sortRichest(){
    removeDefault();
    usersArray = usersArray.sort((a,b)=>b.wealth-a.wealth);
    showDefault();
}

function totalWealth(){
        let totalSum = usersArray.reduce((total,user)=>(total+=user.wealth), 0);
        console.log(totalSum);
        let row = document.createElement('div');
        row.classList.add('row','child','sum');
        let nameCol = document.createElement('div');
        nameCol.classList.add('col','bold');
        nameCol.innerText = 'Total-wealth';
        let wealthCol = document.createElement('div');
        wealthCol.classList.add('col','normal');
        wealthCol.innerText = `$ ${totalSum}`;
        row.appendChild(nameCol);
        row.appendChild(wealthCol);
        displayArea.appendChild(row);
}

function removeDefault(){
    const childElement = document.querySelectorAll('.child');
    for (let index = 0; index < childElement.length; index++) {
        displayArea.removeChild(childElement[index]);
    }
}


