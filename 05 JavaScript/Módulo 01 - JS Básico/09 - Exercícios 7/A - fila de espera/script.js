// criando a lista de pacientes:
const listaPacientes = [];

//Capturando o campo de exibição de mensagens:
const mensagem = document.getElementById('campoMensagem');


function adicionarPaciente() {
    const paciente = toTitleCase(document.getElementById('paciente').value);

    if (paciente.length === 0) {
        alert("Informe o nome do paciente.");
        return;
    }

    
    listaPacientes.push(paciente);
    
    console.log(paciente);
    console.log(listaPacientes);

    exibirResultado();
    mensagemAdicionar();
}

function removerPaciente() {
    mensagemRemover();

    listaPacientes.shift();

    exibirResultado();
}

function exibirResultado() {
    // Mostrar toda a div de resultado:
    const saida = document.getElementById('saida');
    saida.classList.remove('escondido');

    // Mostrar lista de espera de pacientes no select:
    const selectLista = document.getElementById('lista');
    selectLista.innerHTML = "";

    for (i = 0; i < listaPacientes.length; i++) {
        let item = document.createElement('option');
        item.textContent = `${i + 1}) ${listaPacientes[i]}`;
        item.value = `pos${i}`;
        selectLista.appendChild(item);
    }     
}

// Notificações da ação executada:
function mensagemAdicionar() {
    // Mostrar mensagem do lado:
    mensagem.innerHTML = `
    <p class="aviso-add">
    Paciente ${listaPacientes.at(-1)} adicionado(a) com sucesso à fila de atendimento.
    </p>
    `;
    // Usei ".at(-1)"" porque o [-1] dava undefined.
    setTimeout(() => {  mensagem.innerHTML = ""; }, 4000);
}
function mensagemRemover() {
    // Mostrar mensagem do lado:
    mensagem.innerHTML = `
    <p class="aviso-remove">
    Paciente ${listaPacientes.at(0)} atendido(a).
    </p>
    `;
    setTimeout(() => {  mensagem.innerHTML = ""; }, 4000);
}

function encerrar() {
    location.reload();
}



function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}