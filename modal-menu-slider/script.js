const menuOpenClose = document.getElementById('menu-btn');
const slidingMenu = document.getElementById('sliding-menu');
menuOpenClose.addEventListener('click',()=>{
    menuOpenClose.firstElementChild.classList.toggle('hide');
    menuOpenClose.lastElementChild.classList.toggle('hide');
})