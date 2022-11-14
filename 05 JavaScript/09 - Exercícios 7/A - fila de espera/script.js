const listaPacientes = [];

function adicionarPaciente() {
    const paciente = document.getElementById('paciente').value;

    if (paciente.length === 0) {
        alert("Informe o nome do paciente.");
        return;
    }
    
    listaPacientes.push(paciente);
    
    console.log(paciente);
    console.log(listaPacientes);

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

    // Mostrar mensagem do lado:
    const mensagem = document.getElementById('campoMensagem');
    /* Falta:
    Adicionar mensagem
    Adicionar botão de atender próximo cliente
    Adicionar botão de encerrar atendimento
    */ 
    
}