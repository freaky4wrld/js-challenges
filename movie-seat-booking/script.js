const sideColumn = document.querySelectorAll('.side'); //seats-section
const midColumn = document.querySelector('.mid'); //seats-section
let seatArray = []
// dynamic population of UI
sideColumn.forEach((side)=>{
    createSeat(2,6,side);
})
createSeat(4,6,midColumn)
function createSeat(rows, cols,parent){
    for (let index = 1; index < cols+1; index++) {
        for (let subindex = 1; subindex < rows+1; subindex++) {
            let seat = document.createElement('button')
            seat.className = 'available-seat'
            parent.appendChild(seat)
        }
        
    }
}
const availableSeats = document.querySelectorAll('button')
availableSeats.forEach((seat)=>{
    seatArray.push(seat)
})

// random selection of occupied seats
for (let subindex = 0; subindex < 10; subindex++) {
    let randomIndex = Math.floor(Math.random()*seatArray.length)
    seatArray[randomIndex].classList.toggle('available-seat')
    seatArray[randomIndex].classList.toggle('unavailable')
}

// seats booking and result-showing
const movies = [9,4,7] //movies-price
let bookedSeats = 0;
let price = 0;
const seatDisplay = document.querySelector('.booked-seats')
const priceDisplay = document.querySelector('.price')

seatDisplay.innerText = `${bookedSeats}`
priceDisplay.innerText = `$${price}`

// update booked seats
availableSeats.forEach((seat)=>{
    seat.addEventListener('click',()=>{
        if(seat.className == 'available-seat'){
            seat.classList.toggle('available-seat');
            seat.classList.toggle('booked-seat');
            bookedSeats++;
            price = bookedSeats*movies[document.querySelector('select').selectedIndex];
            seatDisplay.innerText = `${bookedSeats}`
            priceDisplay.innerText = `$${price}`
        }else if(seat.className == 'booked-seat'){
            seat.classList.toggle('available-seat');
            seat.classList.toggle('booked-seat');
            bookedSeats--;
            price = bookedSeats*movies[document.querySelector('select').selectedIndex];
            seatDisplay.innerText = `${bookedSeats}`
            priceDisplay.innerText = `$${price}`
        }
    })
})

// to check of selected movie is changed and display price change on new-selection
const selectMovie = document.querySelector('select');
selectMovie.addEventListener('change', ()=>{
    bookedSeats = bookedSeats
    price = bookedSeats*movies[selectMovie.selectedIndex]
    seatDisplay.innerText = `${bookedSeats}`
    priceDisplay.innerText = `$${price}`
})


