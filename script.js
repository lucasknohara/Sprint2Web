const formularioRegistro = document.querySelector("#formularioRegistro");
const mensagem = document.querySelector("#mensagem");

formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    localStorage.setItem("estaLogado", true);

    mensagem.style.color = "green";
    mensagem.textContent = "Conta criada com sucesso!";

    setTimeout(() => {
         window.location.href = "../src/pageInicio/index.html";
    }, 1000);
});
const imagens = [
    "../src/img/JOVI1.jpg",
    "../src/img/JOVI2.jpg",
    "../src/img/JOVI3.jpg"
];

let indiceAtual = 0;

function trocarFundo() {

    document.body.style.backgroundImage = `url('${imagens[indiceAtual]}')`;

    indiceAtual++;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    };
};

trocarFundo();

setInterval(trocarFundo, 3000);