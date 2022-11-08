const listaCidades = ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Fortaleza", "Curitiba", "Manaus", "Recife", "Porto Alegre", "Florianópolis", "Gramado"];

let visitadas = [];

let perguntadas = [];

let consulta;

let cidade;

let mostrar = document.getElementById('icidade');


function cidadesVisitadas() {
    // Gerando uma cidade aleatória da lista:
    let rand = Math.trunc(Math.random() * listaCidades.length);
    cidade = listaCidades[rand];

    // Removendo uma cidade já sorteada:
    listaCidades.splice(rand, 1);

    // Mostrando a cidade randomizada:
    mostrar.textContent = cidade;
    

    // Adicionando a cidade sorteada à lista de perguntadas (evitando repetições):
    if (!(perguntadas.includes(cidade))) {
        perguntadas.push(cidade);
    }   
    
    
        console.log(cidade);
        console.log(visitadas);
        console.log(perguntadas);
    
        
        console.log(listaCidades.length);
        console.log(perguntadas.length);
        console.log(visitadas.length);

    //Finalizando o programa:
    if (perguntadas.length === 13) {
        alert("Todas as cidades foram apresentadas");
        mostrar.textContent = "Quantas cidades";
        exibir();

        
    }

}

function adicionar() {
    if (!(visitadas.includes(cidade))) {
        visitadas.push(cidade);
    }
    cidadesVisitadas();
}

function exibir() {
    const saida = document.getElementById("saida");
    saida.innerHTML = "";
    
    let exibicao = document.createElement('p');
    saida.appendChild(exibicao);

    let resCidades = ``;

    for (i = 0; i < visitadas.length; i++) {
        resCidades += `${visitadas[i]}, `
    }
    exibicao.innerText = `Cidades visitadas: ${resCidades.slice(0, -2)}.`;
    exibicao.innerText += `\n\nVocê visitou um total de ${visitadas.length} cidades.`;

    if (visitadas.length === 12) {
        exibicao.innerText += "\n\nParabéns! Você visitou todas a cidades da lista.";
    }
}