(() => {
    let playing = true,
        activeHole = 1;

    let winCount = 0;
    let loseCount = 0;
  
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    getHole = index => document.getElementById(`hole${index}`);

    function resetGame() {
        winCount = 0;
        loseCount = 0;
        deadCounter.textContent = winCount;
        lostCounter.textContent = loseCount;
    }

    function checkGameStatus() {
        if (winCount >= 10) {
            alert('Поздравляем! Вы победили!');
            resetGame();
        } else if (loseCount >= 5) {
            alert('Игра окончена! Вы проиграли!');
            resetGame();
        }
    }

    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
    
        hole.addEventListener('click', () => {
            if (!playing) return;
            if (hole.className.includes('hole_has-mole')) {
                winCount++;
                deadCounter.textContent = winCount;
            } else {
                loseCount++;
                lostCounter.textContent = loseCount;
            }
            checkGameStatus();
        });
    }
})();