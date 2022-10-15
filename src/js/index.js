/*

Qual é o objetivo deste java script?

OBJETIVO: Quando clicarmos na aba temos que mostrar o conteúdo da aba
que foi clicada pelo usuário e esconder o conteúdo da aba anterior

- PASSO 1 - dar um jeito de pegar os elementos que representam as abas no HTML

- PASSO 2 - dar um jeito de identificar o clique no elemento da aba

- PASSO 3 - quando o usuário clicar, desmarcar a aba selecionada

- PASSO 4 - marcar a aba clicada como selecionado

- PASSO 5 - esconder o conteúdo anterior

- PASSO 6 - mostrar o conteúdo da aba selecionada

*/

// - PASSO 1 - dar um jeito de pegar os elementos que representam as abas no HTML (comentário em linha)
console.log("oi"); // desnecessário
console.log(document.querySelectorAll(".aba")); // desnecessário
const abas = document.querySelectorAll(".aba"); // constante significa que não muda o valor da variável (pegando um valor de dentro do HTML e joga para a variável abas do JS)

abas.forEach(aba => {

    // - PASSO 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        };

        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);

    });
});

// refatoração

function selecionarAba(aba){
    // - PASSO 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado"); // não precisa de "."
    
    // - PASSO 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
};

function mostrarInformacoesDaAba(aba){
    // - PASSO 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // - PASSO 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}