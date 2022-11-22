const imoveis = [];

// Abre o formulário pra preenchimento com os dados do imóvel:
function exibirFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.remove('escondido');
}

// Capturar inputs e salvar imóvel na lista de imóveis:
function salvarImovel() {
    const imovel = {
        proprietario: toTitleCase(document.getElementById('nome').value),
        quartos: document.getElementById('qtd-quartos').value,
        banheiros: document.getElementById('qtd-banheiros').value,
        garagem: valorRadio()
    };

    // Verificando se todos os dados foram preenchidos:
    if ((imovel.proprietario.length === 0) || (imovel.quartos.length === 0) || (imovel.banheiros.length === 0)) {
        alert("Preencha todos os campos!");
        return;
    }

    mensagemSucesso(imovel);

    imoveis.push(imovel);

    contarImoveis();
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

//Contagem de imóveis:
function contarImoveis() {
    const qtdImoveis = document.getElementById('qtd-imoveis');
    qtdImoveis.textContent = `Quantidade de imóveis cadastrados: ${imoveis.length}.`;
}

// Exibir imóveis cadastrados:
function exibirImoveis() {   
    contarImoveis();
    // Se não tiver nenhum imóvel cadastrado, não vai exibir o título sem aparecer nada embaixo:
    if (imoveis.length === 0) {
        return;
    }

    const saidaImoveis = document.getElementById('tabela');
    saidaImoveis.innerHTML = "<caption> Imóveis cadastrados: </caption>"

    for (let i = 0; i < imoveis.length; i++) {
        for (const item in imoveis[i]) {
            // O nome da propriedade foi convertido pra titlecase e a chave "proprietario" foi substituída pela mesma palavra, mas acentuada.
            saidaImoveis.innerHTML += `<tr> 
                <th>${toTitleCase(item).replace("Proprietario", "Proprietário")}: </th>
                <td>${imoveis[i][item].replace("nao", "não")}</td> 
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
    mensagem.innerText = `Imóvel de ${esteImovel.proprietario} cadastrado com sucesso!`;

    setTimeout(() => {  mensagem.innerText = ""; 
    mensagem.classList.add('escondido');}, 3000);
    
}

// Função auxiliar:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}