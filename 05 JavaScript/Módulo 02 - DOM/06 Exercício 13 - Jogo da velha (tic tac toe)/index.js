// Variáveis globais:
const boardRegions = document.querySelectorAll('#gameBoard span');
let vBoard = []; //tabuleiro virtual
let turnPlayer = '';

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer);
    document.getElementById('turnPlayer').innerText = playerInput.value;
}

function initializeGame() {
    // Inicializa as variáveis globais:
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    turnPlayer = 'player1';
    // Ajusta o título da página (caso seja necessário):
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>';
    updateTitle();
    // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique:
    boardRegions.forEach(function (element) {
        // Se estivermos começando um novo jogo, vamos tirar a marcação de vitória do jogo anterior:
        element.classList.remove('win');
        element.innerText = "" // apaga as marcações do jogo anterior
        element.classList.add('cursor-pointer');
        element.addEventListener('click', handleBoardClick); // marca uma área clicada.
    })
}

// Verifica se existem três regiões iguais em sequência e devolve as regiões:
function getWinRegions() {
    const winRegions = [];
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

// Desabilita uma região do tabuleiro para que não seja mais clicável:
function disableRegion(element) {
    element.classList.remove('cursor-pointer');
    element.removeEventListener('click', handleBoardClick);
}

function handleWin(regions) {
    regions.forEach(function (region) {
        document.querySelector(`[data-region="${region}"]`).classList.add('win');
    });
    const playerName = document.getElementById(turnPlayer).value;
    document.querySelector('h2').innerHTML = `${playerName} venceu!`
}

function handleBoardClick(ev) {
    const span = ev.currentTarget;
    const region = ev.currentTarget.dataset.region; // N.N
    // 'currentTarget' é o que acionou o evento.
    const rowColumnPair = region.split('.'); // ["N", "N"]
    const row = rowColumnPair[0];
    const column = rowColumnPair[1];
    if (turnPlayer === 'player1') {
        span.innerText = "X";
        vBoard[row][column] = 'X';
    }
    else {
        span.innerText = "O";
        vBoard[row][column] = 'O';
    }
    // Limpa o console e exibe nosso tabuleiro virtual:
    console.clear();
    console.table(vBoard);

    // Desabilita a região clicada:
    disableRegion(span);

    // Verifica se alguém venceu:
    const winRegions = getWinRegions();
    if (winRegions.length > 0) {
        handleWin(winRegions);
    }
    else if (vBoard.flat().includes('')) {
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1';
        updateTitle();
    }
    else {
        document.querySelector('h2').innerHTML = "Empate!"
    }
}

document.getElementById('start').addEventListener('click', initializeGame);