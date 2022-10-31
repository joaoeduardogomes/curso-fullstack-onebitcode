function atacar() {
    // Impedir que o submit recarregue a página:
    document.getElementById("botao").addEventListener("click", function(event){
        event.preventDefault()
    });
    
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

    
    if (atacante.nome.length == 0 || atacante.poderAtaque == 0) {
        alert("Com exceção do escudo, todos os campos são obrigatórios.");
        return;
    }
    if (defensor.nome.length == 0 || defensor.poderDefesa == 0 || defensor.pv == 0) {
        alert("Com exceção do escudo, todos os campos são obrigatórios.");
        return;
    }
    
    /*
    console.log(atacante);
    console.log(defensor);
    */

    // preparando a exibição das informações:
    const res = document.getElementById('saida');
    res.textContent = "";

    // Verificação do dano:
    if (atacante.poderAtaque <= defensor.poderDefesa) {
        res.textContent = `${defensor.nome} não sofreu nenhum dano`;
        return;
    }

    // Cálculo do dano (se chegar aqui):
    let dano = atacante.poderAtaque - defensor.poderDefesa; // valor padrão do dano
    if (defensor.escudo == true) { // se tiver escudo, o valor padrão é dividido pela metade
        dano /= 2;
        res.textContent = `${defensor.nome} tem um escudo. Logo, o dano foi reduzido pela metade.`
    }

    // Redução dos pontos de vida (PV):
    defensor.pv -= dano;
    if (defensor.pv < 0) {
        defensor.pv = 0;
    }

    // Exibição na página:
    res.innerHTML += `<p>
        ${defensor.nome} recebeu 
        ${dano} 
        de dano.</p>

        <p>
            PV restantes de ${defensor.nome}: ${defensor.pv}
        </p>
        ` 
}