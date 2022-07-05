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

let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {
    images[currentImageIndex]
        .classList.remove("seletor")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("seletor")
}




function start() {
    setInterval(() => {
        //troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)
