const baralho = [];

function adicionar () {
    const valor = document.getElementById('valor').value;
    const naipe = document.getElementById('naipe').value;

    if ((valor === "") || (naipe === "")) {
        alert("[ERRO] — Selecione um valor e um naipe para continuar!");
        return;
    }

    const carta = valor + " " + naipe;
    baralho.unshift(carta);

    exibirBaralho();
    exibirCarta("Carta adicionada:");
}

function remover() {
    if (baralho.length === 0) {
        alert("[ERRO] — O baralho está vazio!");
        return;
    }
    
    exibirCarta("Carta removida:")
    
    baralho.shift();

    exibirBaralho();
}


function exibirBaralho() {
    const listagemCartas = document.getElementById('listagemCartas');
    listagemCartas.innerHTML = "";

    for (i=0; i < baralho.length; i++) {
        let item = document.createElement('option');
        item.textContent = baralho[i];
        item.value = baralho[i];
        listagemCartas.appendChild(item);
    }
}

function exibirCarta(msg) {
    // Selecionando o span que exibirá a imagem:
    let areaImg = document.querySelector('#areaCarta');

    // Adicionando mensagem de carta adicionada ou removida:
    areaImg.textContent = msg;


    // Verificando qual será a carta exibida:
    const {urlImagem, altImagem} = urlImagemCarta();
    

    // Criando a carta:
    let imgCarta = document.createElement('img');
    // Adicionando id à carta:
    imgCarta.setAttribute('id', 'imagemCarta');
    // Informando o src da carta:
    imgCarta.setAttribute('src', urlImagem);
    // Informando o alt da carta:
    imgCarta.setAttribute('alt', `imagem da carta ${altImagem}`);
    
    // Colocado a img criada na span de exibição da imagem:
    areaImg.appendChild(imgCarta);
}

function urlImagemCarta() {   
    let urlImagem;
    let altImagem;

    switch (baralho.at(0)) {
        // Naipe de paus
        case "1 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/8/87/01_of_clubs_01.svg";
            altImagem = "às de paus";
            break;
        case "2 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/d/d7/02_of_clubs.svg";
            altImagem = "2 de paus";
            break;
        case "3 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/f/f9/03_of_clubs.svg";
            altImagem = "3 de paus";
            break;
        case "4 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/a/ab/04_of_clubs.svg";
            altImagem = "4 de paus";
            break;
        case "5 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/a/ac/05_of_clubs.svg";
            altImagem = "5 de paus";
            break;
        case "6 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/b/be/06_of_clubs.svg";
            altImagem = "6 de paus";
            break;
        case "7 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/7/7e/07_of_clubs.svg";
            altImagem = "7 de paus";
            break;
        case "8 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/8/88/08_of_clubs.svg";
            altImagem = "8 de paus";
            break;
        case "9 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/1/1f/09_of_clubs.svg";
            altImagem = "9 de paus";
            break;
        case "10 ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/b/bb/10_of_clubs_-_David_Bellot.svg";
            altImagem = "10 de paus";
            break;
        case "J ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Jack_of_clubs_en.svg";
            altImagem = "valete de paus";
            break;
        case "Q ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Queen_of_clubs_en.svg/209px-Queen_of_clubs_en.svg.png";
            altImagem = "rainha de paus";
            break;
        case "K ♣":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/King_of_clubs_en.svg/209px-King_of_clubs_en.svg.png";
            altImagem = "rei de paus";
            break;
        // Naipe de ouros:
        case "1 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/1/1e/01_of_diamonds_01.svg";
            altImagem = "às de ouros";
            break;
        case "2 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/e/ea/02_of_diamonds.svg";
            altImagem = "2 de ouros";
            break;
        case "3 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/0/00/03_of_diamonds.svg";
            altImagem = "3 de ouros";
            break;
        case "4 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/8/80/04_of_diamonds.svg";
            altImagem = "4 de ouros";
            break;
        case "5 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/2/2e/05_of_diamonds.svg";
            altImagem = "5 de ouros";
            break;
        case "6 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/c/c6/06_of_diamonds.svg";
            altImagem = "6 de ouros";
            break;
        case "7 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/9/95/07_of_diamonds.svg";
            altImagem = "7 de ouros";
            break;
        case "8 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/4/42/08_of_diamonds.svg";
            altImagem = "8 de ouros";
            break;
        case "9 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/2/2c/09_of_diamonds.svg";
            altImagem = "9 de ouros";
            break;
        case "10 ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/a/ae/10_of_diamonds_-_David_Bellot.svg";
            altImagem = "10 de ouros";
            break;
        case "J ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jack_of_diamonds_en.svg/209px-Jack_of_diamonds_en.svg.png";
            altImagem = "valete de ouros";
            break;
        case "Q ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Queen_of_diamonds_en.svg/209px-Queen_of_diamonds_en.svg.png";
            altImagem = "rainha de ouros";
            break;
        case "K ♦":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/6/66/King_of_diamonds_en.svg";
            altImagem = "rei de ouros";
            break;
        // Naipe de espadas:
        case "1 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/a/a2/01_of_spades_01.svg";
            altImagem = "às de espadas";
            break;
        case "2 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/4/40/02_of_spades.svg";
            altImagem = "2 de espadas";
            break;
        case "3 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/6/62/03_of_spades.svg";
            altImagem = "3 de espadas";
            break;
        case "4 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/7/7a/04_of_spades.svg";
            altImagem = "4 de espadas";
            break;
        case "5 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/1/16/05_of_spades.svg";
            altImagem = "5 de espadas";
            break;
        case "6 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/6/6e/06_of_spades.svg";
            altImagem = "6 de espadas";
            break;
        case "7 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/0/06/07_of_spades.svg";
            altImagem = "7 de espadas";
            break;
        case "8 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/d/dc/08_of_spades.svg";
            altImagem = "8 de espadas";
            break;
        case "9 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/4/4f/09_of_spades.svg";
            altImagem = "9 de espadas";
            break;
        case "10 ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/b/b7/10_of_spades_-_David_Bellot.svg";
            altImagem = "10 de espadas";
            break;
        case "J ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Jack_of_spades_en.svg/209px-Jack_of_spades_en.svg.png";
            altImagem = "valete de espadas";
            break;
        case "Q ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Queen_of_spades_en.svg/209px-Queen_of_spades_en.svg.png";
            altImagem = "rainha de espadas";
            break;
        case "K ♠":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/King_of_spades_en.svg/209px-King_of_spades_en.svg.png";
            altImagem = "rei de espadas";
            break;
        // Naipe de copas:
        case "1 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/c/c9/01_of_hearts_01.svg";
            altImagem = "às de copas";
            break;
        case "2 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/7/74/02_of_hearts.svg";
            altImagem = "2 de copas";
            break;
        case "3 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/f/fc/03_of_hearts.svg";
            altImagem = "3 de copas";
            break;
        case "4 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/2/26/04_of_hearts.svg";
            altImagem = "4 de copas";
            break;
        case "5 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/d/d1/05_of_hearts.svg";
            altImagem = "5 de copas";
            break;
        case "6 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/0/0c/06_of_hearts.svg";
            altImagem = "6 de copas";
            break;
        case "7 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/3/3f/07_of_hearts.svg";
            altImagem = "7 de copas";
            break;
        case "8 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/3/37/08_of_hearts.svg";
            altImagem = "8 de copas";
            break;
        case "9 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/e/e7/09_of_hearts.svg";
            altImagem = "9 de copas";
            break;
        case "10 ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/e/e1/10_of_hearts_-_David_Bellot.svg";
            altImagem = "10 de copas";
            break;
        case "J ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jack_of_hearts_en.svg/209px-Jack_of_hearts_en.svg.png";
            altImagem = "valete de copas";
            break;
        case "Q ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Queen_of_hearts_en.svg/209px-Queen_of_hearts_en.svg.png";
            altImagem = "rainha de copas";
            break;
        case "K ♥":
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/King_of_hearts_en.svg/209px-King_of_hearts_en.svg.png";
            altImagem = "rei de copas";
            break;
        default:
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Joker_black_02.svg";
    }

    return {urlImagem, altImagem};
}
