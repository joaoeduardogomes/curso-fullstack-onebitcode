const imoveis = [];
let formulario = document.getElementById('formulario');

// Capturar inputs e salvar imóvel na lista de imóveis:
function salvarImovel() {
    const imovel = {
        nomeProprietario: toTitleCase(document.getElementById('nome').value),
        qtdQuartos: document.getElementById('qtd-quartos').value,
        qtdBanheiros: document.getElementById('qtd-banheiros').value,
        temGaragem: valorRadio()
    };

    // Verificando se todos os dados foram preenchidos:
    if ((imovel.nomeProprietario.length === 0) || (imovel.qtdQuartos.length === 0) || (imovel.qtdBanheiros.length === 0)) {
        alert("Preencha todos os campos!");
        return;
    }

    imoveis.push(imovel);

    console.log(imovel);
    console.log(imoveis);
    imoveis.forEach(item => console.log(item));
}

// Verificar qual das opções foram escolhidas (radio de garagem -> s/n):
function valorRadio() {
    let garagem = document.getElementsByName('garagem');
    for (let i = 0; i < garagem.length; i++) {
        if (garagem[i].checked) {
            // do whatever you want with the checked radio
            return garagem[i].value;
        }
    }
}

// Exibir imóveis cadastrados:
function exibirImoveis() {
    const qtdImoveis = document.getElementById('qtd-imoveis');
    qtdImoveis.textContent = `Quantidade de imóveis cadastrados: ${imoveis.length}.`;
    
    const saida = document.getElementById('saida');

    const saidaImoveis = document.createElement('p');
    saida.appendChild(saidaImoveis);

    for (let i = 0; i < imoveis.length; i++) {
        for (const item in imoveis[i]) {
            saidaImoveis.innerText += `${item}: ${imoveis[i][item]} \n`;
        }
    }
    
    /*
    for (let i; i < imoveis.length; i++) {
        saidaImoveis.textContent += `Proprietário: ${imoveis[i].nomeProprietario}`
    }

    saidaImoveis.textContent = `${imoveis[0].nomeProprietario}`
    */
}


// Função auxiliar:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}