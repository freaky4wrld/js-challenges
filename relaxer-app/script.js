const circle = document.getElementById('outer');
const instructText = document.querySelector('.instruct');
circleAnimate();
function circleAnimate(){
    circle.className = 'gradient-circle grow';
    instructText.innerText = 'Breathe In'

    setTimeout(()=>{
        instructText.innerText = 'Hold'
    
        setTimeout(()=>{
            circle.className = 'gradient-circle shrink';
            instructText.innerText = 'Breathe Out'
        
        },3000)
    },3000)
}

setInterval(circleAnimate,9000);

