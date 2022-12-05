// Exibir formulários de adição/remoção:
function formEscalar() {
    escalar.classList.toggle('escondido');
    remover.classList.add('escondido');
}

function formRemover() {
    remover.classList.toggle('escondido');
    escalar.classList.add('escondido');
}

// Escalar jogador:
function escalarJogador() {
    const {posicaoJogador, nomeJogador, numeroJogador} = capturarValores();

    const jogador = {
        posicao: posicaoJogador,
        nome: nomeJogador,
        numero: numeroJogador
    }

    time.push(jogador);

    console.log(jogador);
    console.log(time);
}
function capturarValores() {
    // capturando a posição do jogador:
    const formPosicao = document.getElementById('posicao');
    const posicaoJogador = formPosicao.options[formPosicao.selectedIndex].value;
    if(posicaoJogador.length === 0) {
        alert("Informe a posição do jogador a ser escalado.");
        return;
    }

    // Capturando o nome do jogador:
    const nomeJogador = toTitleCase(document.getElementById('nome').value);
    if(nomeJogador.length === 0) {
        alert("Informe o nome do jogador a ser escalado.");
        return;
    }

    // capturando o número do jogador:
    const numeroJogador = document.getElementById('numero').value;
    if(numeroJogador.length === 0) {
        alert("Informe o número do jogador a ser escalado.");
        return;
    }

    
    return {posicaoJogador, nomeJogador, numeroJogador};
}


//Funções auxiliares:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

const escalar = document.getElementById('form-escalar');
const remover = document.getElementById('form-remover');

const time = [];