const boardRegions = document.querySelectorAll('#gameBoard span');
let vBoard = []; //tabuleiro virtual
let trunPlayer = '';

function updateTitle() {
    const playerInput = document.getElementById(trunPlayer);
    document.getElementById('turnPlayer').innerText = playerInput.value;
}

function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    trunPlayer = 'player1';
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>';
    updateTitle();
    boardRegions.forEach(function (element) {
        // Se estivermos começando um novo jogo, vamos tirar a marcação de vitória do jogo anterior:
        element.classList.remove('win');
        element.innerText = "" // apaga as marcações do jogo anterior
        element.addEventListener('click', handleBoardClick); // marca uma área clicada.
    })
}

function disableRegion(element) {
    element.style.cursor = 'default';
    element.removeEventListener('click', handleBoardClick);
}

function handleBoardClick(ev) {
    const span = ev.currentTarget;
    const region = ev.currentTarget.dataset.region; // N.N
    // 'currentTarget' é o que acionou o evento.
    const rowColumnPair = region.split('.'); // ["N", "N"]
    const row = rowColumnPair[0];
    const column = rowColumnPair[1];
    if (trunPlayer === 'player1') {
        span.innerText = "X";
        vBoard[row][column] = 'X';
    }
    else {
        span.innerText = "O";
        vBoard[row][column] = 'O';
    }
    console.clear();
    console.table(vBoard);
    disableRegion(span);
}

document.getElementById('start').addEventListener('click', initializeGame);