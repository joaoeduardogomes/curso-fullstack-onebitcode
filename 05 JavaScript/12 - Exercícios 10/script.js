let index = 1;
const vagas = [
    {
        indice: index++,
        funcao: "Tradutor JP-PTBR",
        descricao: "Traduzir capítulos semanais de mangá.",
        dataLimite: "05/02/2023",
        candidatos: 0,
        inscritos: []
    },
    {
        indice: index++,
        funcao: "Desenvolvedor web",
        descricao: "Criar e editar páginas web conforme demanda.",
        dataLimite: "08/03/2023",
        candidatos: 0,
        inscritos: []
    }
];

const formCadastro = document.getElementById('formulario');

function exibirForm() {
    formCadastro.classList.toggle('escondido');
}

function exibirVagas() {
    // Esconde o formulario de cadastro:
    formCadastro.classList.add('escondido');
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = "<caption>Vagas abertas:</caption>"

    for (let i = 0; i < vagas.length; i++) {
        for (let item in vagas[i]) {
            tabela.innerHTML += `<tr>
            <th>${toTitleCase(substituir(item)).toString()}: </th>
            <td>${vagas[i][item]}</td>
            </tr>`
        }

        tabela.innerHTML += ` <td colspan="3">         
        <button class="botao">Candidatar-se</button>
        <button class="botao">Excluir</button>
        </td>
        `

        tabela.innerHTML += "<br>"
    }
    

    // Aplicando scope = "row" pra tudo:
    const th = document.querySelectorAll("th");
    th.forEach((titulo) => {
        titulo.setAttribute("scope", "row");
    });

    console.log(vagas)
}

function salvarVaga() {
    const vaga = {
        indice: index++,
        funcao: document.getElementById('funcao').value,
        descricao: document.getElementById('descricao').value,
        dataLimite: pegarData(),
        candidatos: 0,
        inscritos: []
    }

    vagas.push(vaga);

    const mensagem = document.getElementById('mensagem');
    mensagem.classList.remove('escondido');
    mensagem.innerText = `Vaga cadastrada com sucesso!`;

    setTimeout(() => {  mensagem.innerText = ""; 
    mensagem.classList.add('escondido');}, 3000);
}

function pegarData() {
    var data = new Date(document.getElementById('dataLimite').value),
        dia = (data.getDate() + 1).toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

// Função auxiliar:
function substituir(dado) {
    return dado.toString().replace("indice", "índice").replace("funcao", "função").replace("descricao", "descrição").replace("dataLimite", "data limite");
}

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}