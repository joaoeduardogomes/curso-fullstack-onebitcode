function addLinhaTec() {
    const areaTecnologias = document.getElementById('area-tecnologias');

    listaTec.push(entrada);

    areaTecnologias.innerHTML = listaTec;

    /* for (let i = 0; i < listaTec.length; i++) {
        areaTecnologias.innerHTML = listaTec;
    } */

}

function removerLinhaTec(botao) {

}



const listaTec = []

const entrada = `
    <span class="row gap-2 mb-2">
        <input type="text" placeholder="Tecnologia" name="itecnologia" id="tecnologia" list="lista-tecnologias" class="col-4 coll">
        <datalist id="lista-tecnologias">
            <option value="HTML"></option>
            <option value="CSS"></option>
            <option value="JavaScript"></option>
            <option value="Python"></option>
            <option value="GO"></option>
            <option value="Rust"></option>
            <option value="React"></option>
            <option value="PostgreSQL"></option>
            <option value="MySQL"></option>
            <option value="MongoDB"></option>
        </datalist>
        <select name="iexperiencia" id="experiencia" class="col-6 coll">
            <option value="" selected class="bg-secondary bg-opacity-50">--- Experiência ---</option>
            <option value="0-2">0-2 anos</option>
            <option value="3-4">3-4 anos</option>
            <option value="5+">5+ anos</option>
        </select>
        <button class="btn btn-outline-danger col-1 coll" onclick="removerLinhaTec(this.ParentNode)">
            <i class="bi bi-dash-lg"></i>
        </button>
    </span>
`;