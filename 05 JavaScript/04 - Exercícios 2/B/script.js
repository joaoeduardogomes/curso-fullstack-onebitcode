function atacar() {
    // Criaçao dos objetos: 
    const atacante = {
        nome: document.getElementById('nomeAtacante').value,
        poderAtaque: Number(document.getElementById('valorAtaque').value)
    };

    const defensor = {
        nome: document.getElementById('nomeDefensor').value,
        poderDefesa: Number(document.getElementById('valorDefesa').value),
        pv: Number(document.getElementById('pv').value),
        escudo: document.getElementById('escudo').checked // pra pegar o valor do checkbox
    };

    console.log(atacante);
    console.log(defensor);

    // preparando a exibição das informações:
    const res = document.getElementById('saida');
    res.textContent = "";

    // Verificação do dano:
    if (atacante.poderAtaque <= defensor.poderDefesa) {
        res.textContent = `${defensor.nome} não sofreu nenhum dano`;
        return;
    }
    res.innerHTML += `<p>
        ${defensor.nome} recebeu 
        ${atacante.poderAtaque - defensor.poderDefesa} 
        de dano.</p>` 
}