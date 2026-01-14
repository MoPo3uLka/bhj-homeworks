const timerElement = document.getElementById('timer');
let totalSeconds = parseInt(timerElement.textContent);

const timerId = setInterval(() => {
    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
        
    timerElement.textContent = 
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
        
    if (seconds <= 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
}, 1000);