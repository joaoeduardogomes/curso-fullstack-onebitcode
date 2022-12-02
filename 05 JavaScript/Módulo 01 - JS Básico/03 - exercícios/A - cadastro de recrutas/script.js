function enviarDados() {
    // Pegando os dados do formulário:
    const nome = document.getElementById('inome').value;
    const sobrenome = document.getElementById('isobrenome').value;
    const areaEstudo = document.getElementById('iestudo').value;
    const dataNascimento = new Date(document.getElementById('inascimento').value);
    
    // Calculando a idade:
    const anoAtual = new Date();
    const idade = anoAtual.getFullYear() - dataNascimento.getFullYear();

    exibirDados(nome, sobrenome, areaEstudo, idade);
}

function exibirDados(nome, sobrenome, areaEstudo, idade) {
    switch (areaEstudo) {
        case "CET":
            areaEstudo += " — Ciências Exatas e da Terra"
            break;
        case "BIO":
            areaEstudo += " — CIências Biológicas"
            break;
        case "ENG":
            areaEstudo += " — Engenharias"
            break;
        case "SAU":
            areaEstudo += " — Ciências da Saúde"
            break;
        case "AGR":
            areaEstudo += " — Ciências Agrárias"
            break;
        case "LET":
            areaEstudo += " — Linguística, Letras e Artes";
            break;
        case "SOC":
            areaEstudo += " — Ciências Sociais Aplicadas";
            break;
        case "HUM":
            areaEstudo += " — Ciências Humanas";
            break;
    }

    const recruta = {
        recNome: nome,
        recSobrenome: sobrenome,
        recAreaEstudo: areaEstudo,
        recIdade: idade
    }
    
    criarElementos(recruta);
}

function criarElementos(recruta) {
    // Parte de criação de elementos:
    let dadosRecruta = document.querySelector('div#saida');
    dadosRecruta.innerHTML = "";

    const pNomeCompleto = document.createElement('p');
    const pAreaEstudo = document.createElement('p');
    const pIdade = document.createElement('p');

    pNomeCompleto.textContent = `Nome completo: ${recruta.recNome} ${recruta.recSobrenome}.`
    pAreaEstudo.textContent = `Área de estudo: ${recruta.recAreaEstudo}.`;
    pIdade.textContent = `Idade: ${recruta.recIdade} anos.`;

    dadosRecruta.append(pNomeCompleto, pAreaEstudo, pIdade);
}