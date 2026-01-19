function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < window.innerWidth
    );
}

function handleReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        if (isElementVisible(element) && !element.classList.contains('reveal_active')) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', handleReveal);

document.addEventListener('DOMContentLoaded', handleReveal);