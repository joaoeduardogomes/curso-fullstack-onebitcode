function finalizar() {
    let opcoes = document.getElementById('opcoes');
    opcoes.style.display = 'none';
    
    let menu = document.getElementById('entrada');
    reset = document.createElement('input');
    reset.setAttribute('type','reset');
    menu.appendChild(reset);
    reset.addEventListener('click', function () {
        location.reload();
    })
}

function verificar() {
    let escolha = document.getElementsByClassName('botao');
    
    for (let i = 0; i < escolha.length; i++) {
        escolha[i].addEventListener("click", function () {
			console.log(escolha[i].value);
            let item = escolha[i].value;
            exibir(item);
        });
    }
}

function exibir(item) {
    const exibicao = document.getElementById('saida');
    exibicao.textContent = `Você escolheu: ${item}`

    return exibicao;
}
