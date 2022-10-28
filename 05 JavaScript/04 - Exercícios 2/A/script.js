function comparar() {
    const nomeV1 = document.getElementById('nomeVeiculo1').value;
    const velV1 = document.getElementById('velocidadeVeiculo1').value;
    const nomeV2 = document.getElementById('nomeVeiculo2').value;
    const velV2 = document.getElementById('velocidadeVeiculo2').value;

    if (nomeV1.length == 0 || nomeV2.length == 0 || velV1.length == 0 || velV2.length == 0) {
        alert("Preencha todos os dados corretamente.");
    }

    
}