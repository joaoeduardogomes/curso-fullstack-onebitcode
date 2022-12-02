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
    const baseTriangulo = Number(document.getElementById('base-triangulo').value);
    const alturaTriangulo = Number(document.getElementById('altura-triangulo').value);

    const areaTriangulo =  (baseTriangulo * alturaTriangulo) / 2;

    exibicao("triângulo", areaTriangulo);
}

function calcularRetangulo() {
    const baseRetangulo = Number(document.getElementById('base-retangulo').value);
    const alturaRetangulo = Number(document.getElementById('altura-retangulo').value);

    const areaRetangulo = (baseRetangulo * alturaRetangulo);

    exibicao("retângulo", areaRetangulo);
}

function calcularQuadrado() {
    const ladoQuadrado = Number(document.getElementById('lado-quadrado').value);

    const areaQuadrado = ladoQuadrado**2;

    exibicao("quadrado", areaQuadrado);
}

function calcularTrapezio() {
    const baseMaior = Number(document.getElementById('base-maior').value);
    const baseMenor = Number(document.getElementById('base-menor').value);
    const alturaTrapezio = Number(document.getElementById('altura-trapezio').value);

    const areaTrapezio = ((baseMaior + baseMenor) * alturaTrapezio) / 2;

    exibicao("trapézio", areaTrapezio);
}

function calcularCirculo() {
    const raioCirculo = Number(document.getElementById('raio-circulo').value);

    const areaCirculo = (raioCirculo**2) * 3.14;

    exibicao("círculo", areaCirculo);
}


// EXIBIÇÃO:
function exibicao(figura, area) {
    const saida = document.getElementById('saida');

    saida.innerText = `A área do ${figura} informado é ${area.toString().replace(".", ",")} .`
}