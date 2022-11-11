function palindromo() {
    // Pegando a palavra inserida pelo usuário:
    const vPalavra = document.getElementById('palavra').value;


    // Regex: 
    var re = /[\W_]/g;
    
    // Limpando todos os espaços (juntando todas as letras): 
    const palavraLimpa = vPalavra.toLowerCase().replace(re, '');

    
    // Invertendo os caracteres da string: 
    const palavraInvertida = inverter(palavraLimpa);

    

    // Testando o palíndromo:
    console.log(palavraLimpa === palavraInvertida);
}

function inverter(str) {
    return str.split("").reverse().join("");
}

function exibir() {
    
}