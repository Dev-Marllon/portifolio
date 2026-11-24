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

// efeito maquina de escrever
const frases = [
    "Transformando ideias em soluções",
    "Evoluindo e aprendendo todos os dias",
    "Sempre aprendendo novas tecnologias",
    "Contruindo o futuro 🚀"

];

const elementoTexto = document.getElementById("texto-digitado");

let indiceFrase = 0;
let indiceLetra = 0;
let apagando = false;

function maquinaDeEscrever() {
    
    const fraseAtual = frases[indiceFrase];

    if (!apagando) {

        elementoTexto.textContent =
            fraseAtual.substring(0, indiceLetra + 1);

        indiceLetra++;    


        if (indiceLetra === fraseAtual.length) {
            apagando = true;
            setTimeout(maquinaDeEscrever, 1800);
            return;
        }

    } else {
        
        elementoTexto.textContent =
            fraseAtual.substring(0, indiceLetra - 1);

        indiceLetra--;
        
        if (indiceLetra === 0) {
            apagando = false;
            indiceFrase = (indiceFrase + 1) % frases.length;
        }

    }
    
    setTimeout(maquinaDeEscrever, apagando ? 45 : 85);
  
}

maquinaDeEscrever();