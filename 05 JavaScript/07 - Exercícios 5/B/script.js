function exibirCalculos() {
    const calculos = document.getElementById('calculos');
    calculos.classList.remove('escondido');
}

function encerrar() {
    location.reload();
}

function guardarValorInicial() {
    const valorInicial = document.getElementById('valorInicial').value;
    console.log(valorInicial);
}
