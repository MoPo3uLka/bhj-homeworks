const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

let clickCount = 0;
let isCookieBig = false;
const originalWidth = 200;

cookie.addEventListener('click', function() {
    clickCount++;
    clickCounter.textContent = clickCount;
    
    if (isCookieBig) {
        cookie.style.width = (originalWidth) + 'px';
    } else {
        cookie.style.width = (originalWidth * 1.2) + 'px';
    }
    
    isCookieBig = !isCookieBig;
});