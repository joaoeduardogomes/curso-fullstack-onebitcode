
let listaCidades = [];

// Pega o nome informado pelo usuário:
function pegarNome() {
    let nome = toTitleCase(document.getElementById('nome').value);
    if (nome === "") {
        nome = "Anônimo";
    }

    return nome;
}

// Exibir o input em que o usuário informa as cidades que visitou:
function exibirPergunta() {
    const pergunta = document.getElementById('informarCidade');
    pergunta.classList.remove('escondido');
}

// Adiciona uma cidade à lista de cidades visitadas:
function adicionar() {
    let cidade = document.getElementById('nomeCidade').value;

    cidade = toTitleCase((cidade));

    if (!(listaCidades.includes(cidade)) && (cidade.length > 0)){
        listaCidades.push(cidade);
        alert(`${cidade} está agora na sua lista de cidades visitadas.`);
    }
}
// Converte o nome da cidade pra title case:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

// Exibe o resultado:
function finalizar() {
    const nome = pegarNome();
    console.log(nome);

    const saida = document.getElementById("saida");
    saida.innerHTML = "";
    
    let exibicao = document.createElement('p');
    saida.appendChild(exibicao);

    let resCidades = ``;

    for (i = 0; i < listaCidades.length; i++) {
        resCidades += `${listaCidades[i]}, `
    }

    const cidadesVisitadas = resCidades.length === 0 ? "nenhuma" : resCidades.slice(0, -2);
    
    exibicao.innerText = `Viajante ${nome}, veja abaixo o resultado das suas aventuras:`
    exibicao.innerText += `\n\nCidades visitadas: ${cidadesVisitadas}.`;
    exibicao.innerText += `\n\nVocê visitou um total de ${listaCidades.length} cidades.`;
}