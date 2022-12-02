function tabuada() {
    // Recebendo o número informado: 
    let num = document.getElementById('num').value;

    // Verificando se nenhum número foi passado:
    if (num.length == 0) {
        window.alert("[ERRO] - Você deve informar um número antes de continuar!");
        return;
    }

    // Convertendo o valor recebido para número:
    num = Number(num);


    // Gerar os valores da tabuada:
    let tabela = document.getElementById('seltab');
    tabela.textContent = "";
    
    for (cont = 1; cont <= 20; cont++) {
        const item = document.createElement('option');
        item.textContent = `${num} x ${cont} = ${num * cont}`;

        item.value = `valor-${cont}`;

        tabela.appendChild(item);
    }
}