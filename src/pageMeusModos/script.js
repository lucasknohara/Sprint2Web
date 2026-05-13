const containerModos = document.querySelector("#area-mais-modos");

function carregarModos() {
    const modosSalvos = JSON.parse(localStorage.getItem("modos")) || [];

    containerModos.innerHTML = "";

    if (modosSalvos.length === 0) {
        containerModos.innerHTML = `
            <button class="botao-amarelo" onclick="irParaCriacao()">
                <img src="../img/engrenagens.png" alt="Criar" class="icone-btn"> 
                Criar seu primeiro modo
            </button>
        `;
    } else {
        containerModos.style.display = "grid";
        containerModos.style.gridTemplateColumns = "repeat(3, 1fr)";
        containerModos.style.alignItems = "start";
        containerModos.style.padding = "20px";
        containerModos.style.gap = "15px";

        let htmlFinal = "";

        modosSalvos.forEach(modo => {
        htmlFinal += `
            <div class="item-modo-criado">
                <div class="wrapper-icone">
                    <img src="${modo.icone}" class="icone-principal">

                    <div class="badge-mais">
                        <img src="../img/mais.png" alt="Add" class="img-badge">
                    </div>
                </div>
                <span class="nome-modo">${modo.nome}</span>
            </div>
        `;
        });

        htmlFinal += `
            <div class="item-modo-criado" onclick="irParaCriacao()">
                <div class="circulo-novo-modo">
                    <span>+</span>
                </div>
                <span class="nome-modo">Novo Modo</span>
            </div>
        `;

        containerModos.innerHTML = htmlFinal;
    }
}

function irParaCriacao() {
    window.location.href = "../pageConfigModo/index.html";
}

carregarModos();