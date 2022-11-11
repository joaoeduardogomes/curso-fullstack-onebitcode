// Input:
function palindromo() {
    // Pegando a palavra inserida pelo usuário:
    const vPalavra = document.getElementById('palavra').value;

    // Verificando se o input está vazio:
    if (vPalavra.length === 0) {
        alert("[ERRO] — Preencha o campo corretamente para prosseguir.");
        return;
    }


    // Regex: 
    var re = /[\W_]/g;
    
    // Limpando todos os espaços (juntando todas as letras): 
    const palavraLimpa = vPalavra.toLowerCase().replace(re, '');

    
    // Invertendo os caracteres da string: 
    const palavraInvertida = inverter(palavraLimpa);

    
    exibir(palavraLimpa, palavraInvertida);

    // Testando o palíndromo:
    console.log(palavraLimpa === palavraInvertida);
}

function inverter(str) {
    return str.split("").reverse().join("");
}

// Output:
function limparExibicao() {
    let res = document.getElementById('saida');
    res.innerHTML = "";
    return res;
}

function exibir(palavraOrdenada, palavraInvertida) {
    res = limparExibicao();

    if (palavraOrdenada === palavraInvertida) {
        res.innerHTML = `
        <p class="sucesso">
        Palíndromo identificado com sucesso!
        </p>`;
        return;
    }

    res.innerHTML = `
    <p class="falha">
    Nenhum palíndromo identificado.
    <p/>`
}
