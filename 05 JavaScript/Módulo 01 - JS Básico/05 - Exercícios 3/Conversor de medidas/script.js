function converter() {
    // Impedir que o submit recarregue a página:
    document.getElementById("botao").addEventListener("click", function(event){
        event.preventDefault()
    });
    
    // Lendo o input do valor em metros:
    const metros = Number(document.getElementById('metros').value);

    // Criando os cálculos de conversão:
    const medidas = {
        mm: metros * 1000,
        cm: metros * 100,
        dm: metros * 10,
        dam: metros * 0.1,
        hm: metros * 0.01,
        km: metros * 0.001
    }

    // Criando o output:
    const saida = document.getElementById('saida');
    let saidaParagrafo = document.createElement('p');
    saida.innerHTML = "";
    saida.appendChild(saidaParagrafo);
    
    // Lendo a opção selecionada para conversão:
    const medida = document.getElementById('medida');
    const escolha = medida.options[medida.selectedIndex].value;
    //console.log(escolha);
    
    // Adicionando o texto dentro do output: 
    switch (escolha) {
        case 'mm':
            saidaParagrafo.textContent = `Valor em milímetros: ${medidas.mm} mm`;
            break;
        case 'cm':
            saidaParagrafo.textContent = `Valor em centímetros: ${medidas.cm} cm`;
            break;
        case 'dm':
            saidaParagrafo.textContent = `Valor em decímetros: ${medidas.dm} dm`;
            break;
        case 'dam':
            saidaParagrafo.textContent = `Valor em decâmetros: ${medidas.dam} dam`;
            break;
        case 'hm':
            saidaParagrafo.textContent = `Valor em hectômetros: ${medidas.hm} hm`;
            break;
        case 'km':
            saidaParagrafo.textContent = `Valor em Quilômetros: ${medidas.km} km`;
            break;
        default:
            saidaParagrafo.innerText = ` Valor em milímetros: ${medidas.mm} mm
            Valor em centímetros: ${medidas.cm} cm
            Valor em decímetros: ${medidas.dm} dm
            Valor em decâmetros: ${medidas.dam} dam
            Valor em hectômetros: ${medidas.hm} hm
            Valor em Quilômetros: ${medidas.km} km
            `;
            break;
        }
}