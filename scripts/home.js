let closeButton = document.querySelector('.closeButton');
let cookiePopup = document.querySelector('.cookie');
let videoSection = document.querySelector('.video');

closeButton.addEventListener('click', (event) => {
    videoSection.removeChild(cookiePopup);
});

window.addEventListener('click', (event) => {
    if (event.target.classList[0] == 'arrowUp') {
        window.scroll(0, 0);
    }
});