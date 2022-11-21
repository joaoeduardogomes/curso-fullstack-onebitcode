const imoveis = [];

function salvarImovel() {
    const imovel = {
        nomeProprietario: toTitleCase(document.getElementById('nome').value),
        qtdQuartos: document.getElementById('qtd-quartos').value,
        qtdBanheiros: document.getElementById('qtd-banheiros').value,
        temGaragem: () => {
            document.getElementsByName('garagem').value;
            for (var i = 0; i < temGaragem.length; i++) {
                if (temGaragem[i].checked) {
                    // do whatever you want with the checked radio
                    console.log(temGaragem[i].value);

                    // only one radio can be logically checked, don't check the rest
                    break;
                }
            }
        }
    };

    /*
    if (imovel.nomeProprietario.length === 0) {
        return;
    }
    */

    console.log(imovel);
}

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}