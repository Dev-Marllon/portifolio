console.log("Ola! Meu primeiro código JavaScript.");

const botao = document.getElementById("btn-apresentacao");

const modalObjetivo = document.getElementById("modal-objetivo");

const fecharModal = document.getElementById("fechar-modal");

botao.addEventListener("click", function () {
    modalObjetivo.showModal();
});

fecharModal.addEventListener("click", function() {
    modalObjetivo.close();

});

// pesquisa de projetos 
const campoBusca = document.getElementById("busca-projetos");

const projetos = document.querySelectorAll(".lista-projetos article");

const mensagemSemResultados = document.getElementById("mensagem-sem-resultados");


campoBusca.addEventListener("input", function () {

    const termo = campoBusca.value.toLowerCase();

    let projetosVisiveis = 0;

    projetos.forEach(function (projeto) {
        const textoProjeto = projeto.textContent.toLowerCase();

        if (textoProjeto.includes(termo)) {
            projeto.style.display = "";
            projetosVisiveis++;
        }else{
            projeto.style.display = "none";
        }

    });
    mensagemSemResultados.hidden = projetosVisiveis > 0;
});