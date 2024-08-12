document.getElementById('infoButton').addEventListener('click', function() {
    alert('Si tu parviens à gagner tous les mini-jeux, tu remporteras un cadeau spécial !');
});

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('gamesContainer').style.display = 'block';
    document.querySelector('header').style.display = 'none';
});

document.getElementById('hiddenHeartButton').addEventListener('click', function() {
    showModal('https://example.com/surprise-image.jpg', 'Félicitations ! Tu as trouvé le cœur caché.');
});

function startGame(gameNumber) {
    switch (gameNumber) {
        case 1:
            playFindHiddenObjectGame();
            break;
        case 2:
            playQuestionGame();
            break;
        case 3:
            startPacMan();
            break;
        case 4:
            startSnake();
            break;
        case 5:
            startPuzzleGame();
            break;
        case 6:
            startMathQuiz();
            break;
        case 7:
            startFindDifference();
            break;
        case 8:
            startMemoryGame();
            break;
        case 9:
            startMazeGame();
            break;
        case 10:
            startGeneralQuiz();
            break;
    }
}

function showModal(imageSrc, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalText').innerText = text;
    modal.style.display = 'block';

    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Jeu 1 : Trouve l'élément caché
function playFindHiddenObjectGame() {
    alert('Cherche l\'élément caché dans l\'image !');
}

// Jeu 2 :
