const vagas = [
    {
        indice: 01,
        nome: "Tradutor JP-PTBR",
        descricao: "Traduzir capítulos semanais de mangá.",
        dataLimite: "05/02/2023",
        candidatos: 0,
        inscritos: []
    },
    {
        indice: 02,
        nome: "Desenvolvedor web",
        descricao: "Criar e editar páginas web conforme demanda.",
        dataLimite: "08/03/2023",
        candidatos: 0,
        inscritos: []
    }
];

console.log(vagas)

function exibirVagas() {
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = "<caption>Vagas abertas:</caption>"

    for (let i = 0; i < vagas.length; i++) {
        for (let item in vagas[i]) {
            tabela.innerHTML += `<tr>
            <th>${toTitleCase(substituir(item)).toString()}: </th>
            <td>${vagas[i][item]}</td>
            </tr>`
        }

        tabela.innerHTML += "<br>"
    }

    // Aplicando scope = "row" pra tudo:
    const th = document.querySelectorAll("th");
    th.forEach((titulo) => {
        titulo.setAttribute("scope", "row");
    });

}

// Função auxiliar:
function substituir(dado) {
    return dado.toString().replace("indice", "índice").replace("descricao", "descrição").replace("dataLimite", "data limite");
}

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}