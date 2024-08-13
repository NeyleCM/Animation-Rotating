const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.getElementById('containerPrincipal')
const menu = document.querySelector('.menu')

open.addEventListener('click', () => {
    console.log('funciona')
    container.classList.toggle('containerDos')
    menu.classList.toggle('open');
    menu.classList.remove('close')
})

close.addEventListener('click', () => {
    console.log('funciona')
    container.classList.toggle('containerDos')
    menu.classList.toggle('close');
    menu.classList.remove('open');
})