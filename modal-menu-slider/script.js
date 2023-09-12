const menuOpenClose = document.getElementById('menu-btn');
const slidingMenu = document.getElementById('sliding-menu');
const signupBtn = document.getElementById('sign-up');
const formShow = document.getElementById('sign-up-form');
const closeForm = document.getElementById('form-close');
const overlay = document.getElementById('overlay');
menuOpenClose.addEventListener('click',()=>{
    menuOpenClose.firstElementChild.classList.toggle('hide');
    menuOpenClose.lastElementChild.classList.toggle('hide');
    slidingMenu.classList.toggle('hide');
    slidingMenu.classList.toggle('animate');
    overlay.classList.toggle('hide');
})

signupBtn.addEventListener('click',()=>{
    formShow.style.display = 'flex';
    overlay.classList.remove('hide');
})
closeForm.addEventListener('click',()=>{
    formShow.style.display = 'none';
    overlay.classList.add('hide');
})