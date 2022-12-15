const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// Selecionar o valor pelo botão do front:
document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    })
});

// Implementando o botão 'clear(c)'
document.getElementById('clear').addEventListener('click', function() {
    input.value = "";
    input.focus(); // depois de apagado, foca no input.
})

// Implementando botão '=':
document.getElementById('equal').addEventListener('click', calculate)

input.addEventListener('keydown', function (ev) {
    ev.preventDefault(); // impede que seja inserido imediatamente o valor da tecla pressionada.
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key; // Se a tecla pressionada estiver nas 'allowedKeys', seu valor será inserido.
        return;
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1); // Se o 'backspace' for pressionado, o último caractere será excluído. (splice do caractere 0 até o último; por isso o '-1').
    }
    if (ev.key === 'Enter') {
        calculate(); // se pressionar 'enter', o cálculo será feito.
    }
});

function calculate() {
    const result = eval(input.value); // A função 'eval' abre brecha de segurança pra executar código JS. Cuidado ao usá-la.
    resultInput.value = result;
}