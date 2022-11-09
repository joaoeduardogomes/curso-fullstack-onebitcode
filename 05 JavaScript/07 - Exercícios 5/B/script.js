let valorAtual;

function exibirCalculos() {
    const calculos = document.getElementById('calculos');
    calculos.classList.remove('escondido');
}

function encerrar() {
    location.reload();
}

function guardarValorInicial() {
    const valorInicial = Number(document.getElementById('valorInicial').value);

    if (valorInicial <= 0) {
        alert("O valor inicial deve ser maior que 0!");
        return;
    } else {}
    
    valorAtual = valorInicial;

    exibirCalculos();
    
    exibir(valorAtual);
}

function somar() {
    const soma = Number(document.getElementById('somar').value);

    valorAtual += soma;

    exibir(valorAtual);
}

function subtrair() {
    const subtracao = Number(document.getElementById('subtrair').value);

    valorAtual -= subtracao;

    exibir(valorAtual);
}

function exibir(valorAtual = 0) {
    const mostrar = document.getElementById('saida');
    mostrar.textContent = `Valor atual: ${valorAtual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
}