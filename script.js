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
        window.location.href = "../src/pageInicio";
    }, 1000);
});