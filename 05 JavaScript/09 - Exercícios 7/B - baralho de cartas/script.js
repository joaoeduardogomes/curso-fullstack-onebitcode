const baralho = [];

function adicionar () {
    const valor = document.getElementById('valor').value;
    const naipe = document.getElementById('naipe').value;

    if ((valor === "") || (naipe === "")) {
        alert("[ERRO] — Selecione um valor e um naipe para continuar!");
        return;
    }

    const carta = valor + " " + naipe;
    baralho.push(carta);

    exibirBaralho();
    exibirCarta("Carta adicionada:");
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

    switch (baralho.at(-1)) {
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
        default:
            urlImagem = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Joker_black_02.svg";
    }

    return {urlImagem, altImagem};
}
