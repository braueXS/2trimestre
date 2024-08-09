  const caixaPrincipal=document.querySelector(".caixa.principal");
  const caixaPerguntas=document.querySelector(".caixa.perguntas");
  const caixaAlternativas=document.querySelector(".caixa.alternativas");
  const caixaResultado=document.querySelector(".caixa.resultado");
  const textoResultado=document.querySelector(".texto.resultado");

  const perguntas = [
    {
        enunciado: "Qual a importância do rap na expressão cultural e social das comunidades urbanas?",
        alternativas: [
            {
                texto: "O rap serve como uma forma importante de expressão para comunidades urbanas,permitindo que os artistas abordem temas sociais, políticos e pessoais que refletem suas realidades e experiências.",
                afirmacao:"afirmacao"
            },
            {
                texto: "O rap tem pouco impacto cultural e social, sendo visto principalmente como uma forma de entretenimento sem profundidade ou relevância cultural.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto do rap na indústria musical global e nas tendências culturais?",
        alternativas: [
            {
                texto: "O rap teve um impacto significativo na indústria musical global, influenciando uma ampla gama de gêneros e tendências culturais, e desempenhando um papel importante na popularização de novos estilos musicais e movimentos culturais.",
                afirmacao: "afirmacao"
            },
            {
                texto: "O rap tem um impacto limitado na indústria musical global e nas tendências culturais, sendo predominantemente uma forma de música local sem grande influência internacional.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a relação entre o rap e o movimento cultural Hip-Hop?",
        alternativas: [
            {
                texto: "O rap é um dos quatro pilares do movimento cultural Hip-Hop, que também inclui o breakdance, o graffiti e o DJing, e desempenha um papel fundamental na definição e evolução desse movimento cultural.",
                afirmacao: "afirmacao"
            },
            {
                texto: "O rap é uma forma de música independente que surgiu sem conexão com o movimento cultural Hip-Hop, focando exclusivamente em sua própria evolução artística.",
                afirmacao: "afirmacao"
            }
        ]
    },  
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Então";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();