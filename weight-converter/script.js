
document.getElementById('output').style.visibility = 'hidden'
document.getElementById('lbsInput').addEventListener('input',(e)=>{
    document.getElementById('output').style.visibility = 'visible'
    let lbs = e.target.value;
    fromPounds(lbs)
})
function fromPounds(lbs){
    document.getElementById('gmOutput').innerText = `${lbs/0.002046}`
    document.getElementById('kgOutput').innerText = `${lbs/2.2046}`
    document.getElementById('ozOutput').innerText = `${lbs*16}`
}