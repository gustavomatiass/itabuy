const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarge.setAttribute('aria-expanded', 'active');
    if(active) {
        event.currentTarge.setAttribute('aria-label', 'fechar menu');
    } else {
        event.currentTarge.setAttribute('aria-label', 'abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


