const listaCidades = ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Fortaleza", "Curitiba", "Manaus", "Recife", "Porto Alegre", "Florianópolis", "Gramado"];

let visitadas = [];

let perguntadas = [];

let consulta;

function cidadesVisitadas() {
    while (true) {

    // Gerando uma cidade aleatória da lista:
    let rand = Math.trunc(Math.random() * listaCidades.length);
    const cidade = listaCidades[rand];

    if (!(perguntadas.includes(cidade))) {
        perguntadas.push(cidade);

        // Perguntando se o usuário já visitou a cidade (excluindo as que já foram visitadas):
        consulta = prompt(`Você já visitou ${cidade}? (s/n)`).toLowerCase();
        // Adicionando à lista de cidades visitadas (se for o caso):
        if (!(visitadas.includes(cidade)) && (consulta === 's')) {
            visitadas.push(cidade);
        }
    }   
    
    // Finalizando o programa:
    if (perguntadas.length === listaCidades.length) {
        alert("Todas as cidades foram apresentadas")

        if (visitadas.length === listaCidades.length) {
            alert("Parabéns! Você visitou todas a cidades da lista.")
        }
        break;
    }

    /*
    console.log(cidade);
    console.log(visitadas);
    console.log(perguntadas);
    console.log(consulta);
    */
    }

    /*
    console.log(listaCidades.length);
    console.log(perguntadas.length);
    console.log(visitadas.length);
    */
    exibir();
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
}