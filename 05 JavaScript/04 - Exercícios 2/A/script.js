function comparar() {
    // Entrada de dados:
    const nomeV1 = document.getElementById('nomeVeiculo1').value;
    let velV1 = document.getElementById('velocidadeVeiculo1').value;
    const nomeV2 = document.getElementById('nomeVeiculo2').value;
    let velV2 = document.getElementById('velocidadeVeiculo2').value;

    // Verificação de campo vazio:
    if (nomeV1.length == 0 || nomeV2.length == 0 || velV1.length == 0 || velV2.length == 0) {
        alert("Preencha todos os dados corretamente.");
    }

    // Conversão da velocidade para número:
    velV1 = Number(velV1);
    velV2 = Number(velV2);

    // Comparação de qual dos dois tem a maior velocidade:
    const maior = {
        nome: velV1 > velV2 ? nomeV1 : nomeV2,
        velocidade: velV1 > velV2 ? velV1 : velV2
    }
    const menor = {
        nome: velV1 < velV2 ? nomeV1 : nomeV2,
        velocidade: velV1 < velV2 ? velV1 : velV2
    }


    // Criação de elementos:
    let res = document.getElementById('saida');

    // Exibição do resultado:
    res.innerHTML = `
    O veículo mais rápido se chama ${maior.nome}, com uma velocidade de ${maior.velocidade} Km/h. <br>
    Ele está ${(maior.velocidade - menor.velocidade).toFixed(2)} Km/h mais rápido do que o veículo chamado ${menor.nome}, que tem uma velocidade de ${menor.velocidade} Km/h.`
}