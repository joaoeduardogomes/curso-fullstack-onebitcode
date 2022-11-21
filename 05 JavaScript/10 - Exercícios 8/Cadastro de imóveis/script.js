const imoveis = [];

// Abre o formulário pra preenchimento com os dados do imóvel:
function exibirFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.remove('escondido');
}

// Capturar inputs e salvar imóvel na lista de imóveis:
function salvarImovel() {
    const imovel = {
        Proprietario: toTitleCase(document.getElementById('nome').value),
        Quartos: document.getElementById('qtd-quartos').value,
        Banheiros: document.getElementById('qtd-banheiros').value,
        Garagem: valorRadio()
    };

    // Verificando se todos os dados foram preenchidos:
    if ((imovel.Proprietario.length === 0) || (imovel.Quartos.length === 0) || (imovel.Banheiros.length === 0)) {
        alert("Preencha todos os campos!");
        return;
    }

    mensagemSucesso(imovel);

    imoveis.push(imovel);
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
    
    // Se não tiver nenhum imóvel cadastrado, não vai exibir o título sem aparecer nada embaixo:
    if (imoveis.length === 0) {
        return;
    }

    const saidaImoveis = document.getElementById('tabela');
    saidaImoveis.innerHTML = "<caption> Imóveis cadastrados: </caption>"

    for (let i = 0; i < imoveis.length; i++) {
        for (const item in imoveis[i]) {
            saidaImoveis.innerHTML += `<tr> 
                <th>${item}: </th> 
                <td>${imoveis[i][item]}</td> 
            </tr>`;
        }
        saidaImoveis.innerHTML += "<br>"
    }
    
    /*
    for (let i; i < imoveis.length; i++) {
        saidaImoveis.textContent += `Proprietário: ${imoveis[i].nomeProprietario}`
    }

    saidaImoveis.textContent = `${imoveis[0].nomeProprietario}`
    */
}

function mensagemSucesso(imovel) {
    esteImovel = imovel;
    const mensagem = document.getElementById('mensagem');
    mensagem.classList.remove('escondido');
    mensagem.innerText = `Imóvel de ${esteImovel.Proprietario} cadastrado com sucesso!`;

    setTimeout(() => {  mensagem.innerText = ""; 
    mensagem.classList.add('escondido');}, 3000);
    
}

// Função auxiliar:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}