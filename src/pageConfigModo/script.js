const botao = document.querySelector("#btnCriar");

botao.addEventListener("click", () => {
    const nomeModo = document.querySelector("#campoNome").value;
    const iconeSelecionado = document.querySelector('input[name="selecao-icone"]:checked');

    if (nomeModo.trim() === "") {
        alert("Nome Obrigatorio!");
        return;
    }

    if (!iconeSelecionado) {
        alert("Icon Obrigatorio!");
        return;
    }

    let confimacao = prompt("Deseja mesmo criar esse modo?");

    if (confimacao !== null && confimacao.toLowerCase() === "sim") {
        const novoModo = {
            nome: nomeModo,
            icone: iconeSelecionado.value,
        };

        let modos = JSON.parse(localStorage.getItem("modos")) || [];
        modos.push(novoModo);
        localStorage.setItem("modos", JSON.stringify(modos));

        alert("Modo Criado!");
        window.location.href = "../pageMeusModos/index.html";
    } else {
        alert("Criação Cancelada!");
    }
}); 