function converter() {
    // Impedir que o submit recarregue a página:
    document.getElementById("botao").addEventListener("click", function(event){
        event.preventDefault()
    });
    
    const metros = Number(document.getElementById('metros').value);

    const medidas = {
        mm: metros * 1000,
        cm: metros * 100,
        dm: metros * 10,
        dam: metros * 0.1,
        hm: metros * 0.01,
        km: metros * 0.001
    }
}