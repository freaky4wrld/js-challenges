const usersArray = [];
const displayArea = document.getElementById('users-display');
const addUserBtn = document.getElementById('add-user');
function generateUser(){
    let newObject = new Object();
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

usersArray.forEach((user,index)=>{
    // console.log(user.name)
    let row = document.createElement('div');
    row.className = 'row';
    let nameCol = document.createElement('div');
    nameCol.classList.add('col','bold');
    nameCol.innerText = `${usersArray[0].name}`;
    let wealthCol = document.createElement('div');
    wealthCol.classList.add('col','normal');
    // wealthCol.innerText = `$ ${user.wealth}`;
    row.appendChild(nameCol);
    row.appendChild(wealthCol);
    displayArea.appendChild(row);
})

addUserBtn.addEventListener('click', ()=>{
    generateUser();
})



