// ÁREA DE EXIBIÇÃO DO FOMRULÁRIO:
        // variáveis de exibição
const triangulo = document.getElementById('triangulo');
const retangulo = document.getElementById('retangulo');
const quadrado = document.getElementById('quadrado');
const trapezio = document.getElementById('trapezio');
const circulo = document.getElementById('circulo');

        // funções de exibição:
function mostrarTriangulo() {
    // exibir/esconder o próprio:
    triangulo.classList.toggle('escondido');

    //esconder os demais:
    retangulo.classList.add('escondido');
    quadrado.classList.add('escondido');
    trapezio.classList.add('escondido');
    circulo.classList.add('escondido');

}

function mostrarRetangulo() {
    retangulo.classList.toggle('escondido');

    triangulo.classList.add('escondido');
    quadrado.classList.add('escondido');
    trapezio.classList.add('escondido');
    circulo.classList.add('escondido');
}

function mostrarQuadrado() {
    quadrado.classList.toggle('escondido');

    triangulo.classList.add('escondido');
    retangulo.classList.add('escondido');
    trapezio.classList.add('escondido');
    circulo.classList.add('escondido');
}

function mostrarTrapezio() {
    trapezio.classList.toggle('escondido');

    triangulo.classList.add('escondido');
    retangulo.classList.add('escondido');
    quadrado.classList.add('escondido');
    circulo.classList.add('escondido');
}

function mostrarCirculo() {
    circulo.classList.toggle('escondido');

    triangulo.classList.add('escondido');
    retangulo.classList.add('escondido');
    quadrado.classList.add('escondido');
    trapezio.classList.add('escondido');
}


// ÁREA DE CÁLCULO:
function calcularTriangulo() {
    //
}

function calcularRetangulo() {
    //
}

function calcularQuadrado() {
    //
}

function calcularTrapezio() {
    //
}

function calcularCirculo() {
    //
}


// EXIBIÇÃO:
function exibicao(figura) {
    
}