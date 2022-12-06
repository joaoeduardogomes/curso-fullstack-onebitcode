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

    confirmacao = window.confirm(`Tem certeza de que deseja escalar o jogador ${jogador.nome}?`);

    if (confirmacao) {
        time.push(jogador);
    }

    // limpando o formulário:
    $(':input').val('');
    $('select').attr('selected', false);

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
    // verificando se já existe um jogador com o mesmo número:
    const repetido = time.some(el => el.numero === numeroJogador);
    if (repetido) {
        alert("O número já está atribuído a outro jogador! \nEscolha outro número.");
        return;
    }


    return {posicaoJogador, nomeJogador, numeroJogador};
}

// Remover jogador da escalação:
function removerJogador() {
    const remover = document.getElementById('numero-remove').value;

    const remocao = time.filter(el => el.numero === remover);
    time.splice(remocao, 1);
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