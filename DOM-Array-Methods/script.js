const usersArray = [];
const displayArea = document.getElementById('users-display');
const addUserBtn = document.getElementById('add-user');
const moneyDoubleBtn = document.getElementById('double-money');
function generateUser(){
    let newObject = {name:'',wealth: 0};
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
        // console.log(usersArray);
    }
}

addDefaultUser();

setTimeout(showDefault, 1000)

addUserBtn.addEventListener('click', ()=>{
    generateUser();
    setTimeout(createNewUser,400);
})

moneyDoubleBtn.addEventListener('click', moneyDouble)

function showDefault(){
    usersArray.forEach(user=>{
        createHTML(user)
    })
}

function createHTML(user){
        let row = document.createElement('div');
        row.className = 'row';
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

function createNewUser(){
        let row = document.createElement('div');
        row.className = 'row';
        let nameCol = document.createElement('div');
        nameCol.classList.add('col','bold');
        nameCol.innerText = usersArray[usersArray.length-1].name;
        let wealthCol = document.createElement('div');
        wealthCol.classList.add('col','normal');
        wealthCol.innerText = `$ ${usersArray[usersArray.length-1].wealth}`;
        row.appendChild(nameCol);
        row.appendChild(wealthCol);
        displayArea.appendChild(row);
}

function moneyDouble(){
    let doubledArray = usersArray.map((user)=>{
        return 2*user.wealth;
    })
    usersArray.forEach((user,index)=>{
        user.wealth = doubledArray[index];
    })
    document.querySelectorAll('.normal').forEach((wealth,index) => wealth.innerText = `$ ${usersArray[index].wealth}`)
}



