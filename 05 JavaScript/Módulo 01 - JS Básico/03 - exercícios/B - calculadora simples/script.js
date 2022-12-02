function calcular() {
    const num1 = Number(document.getElementById('inum1').value);
    const num2 = Number(document.getElementById('inum2').value);
    let res = document.querySelector('div#saida');
    res.innerHTML = "";

    const soma = document.createElement('p');
    const subtracao = document.createElement('p');
    const multiplicacao = document.createElement('p');
    const divisao = document.createElement('p');

    soma.innerHTML = 
        `A soma de 
        <span class="n">${num1} + ${num2}</span> 
        é 
        <span class="n">${num1 + num2}</span>`;
    subtracao.innerHTML = 
        `A subtração de 
        <span class="n">${num1} - ${num2}</span> 
        é 
        <span class="n">${num1 - num2}</span>`;
    multiplicacao.innerHTML = 
        `A multiplicação de 
        <span class="n">${num1} x ${num2}</span> 
        é 
        <span class="n">${num1 * num2}</span>`;
    divisao.innerHTML = 
        `A divisão de 
        <span class="n">${num1} ÷ ${num2}</span> 
        é 
        <span class="n">${(num1 / num2).toFixed(2)}</span>`;

    res.append(soma, subtracao, multiplicacao, divisao);
}