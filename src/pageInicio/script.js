const usuario = localStorage.getItem("usuario");

const tituloBoasVindas = document.querySelector("#bemVindo")

tituloBoasVindas.textContent = `Bem-vindo, ${usuario}!`;