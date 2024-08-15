    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const container = document.getElementById('containerPrincipal');

    open.addEventListener('click', () => {
        container.classList.toggle('containerDos');
    });

    close.addEventListener('click', () => {
        container.classList.toggle('containerDos');
    });


/*Se puede usar el 'DOMContentLoaded'

document.addEventListener('DOMContentLoaded', () => {
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const container = document.getElementById('containerPrincipal');

    open.addEventListener('click', () => {
        container.classList.add('containerDos'); // Activa la rotación y el cambio de íconos
    });

    close.addEventListener('click', () => {
        container.classList.remove('containerDos'); // Revierte la rotación y los íconos
    });
});
*/
