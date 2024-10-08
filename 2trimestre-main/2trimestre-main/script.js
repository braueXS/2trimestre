const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a importância do rap na expressão cultural e social das comunidades urbanas?",
        alternativas: [
            {
                texto: "O rap serve como uma forma importante de expressão para comunidades urbanas,permitindo que os artistas abordem temas sociais, políticos e pessoais que refletem suas realidades e experiências.",
                afirmacao:"O rap é frequentemente utilizado para abordar questões sociais e políticas, oferecendo uma plataforma para que os artistas expressem suas experiências e perspectivas, refletindo as realidades das comunidades urbanas."
            },
            {
                texto: "O rap tem pouco impacto cultural e social, sendo visto principalmente como uma forma de entretenimento sem profundidade ou relevância cultural.",
                afirmacao: "Na verdade, o rap tem um impacto profundo na cultura e sociedade, frequentemente abordando questões relevantes e proporcionando uma voz para comunidades que podem estar marginalizadas."
            }
        ]
    },  
    {
        enunciado: "Qual é o impacto do rap na indústria musical global e nas tendências culturais?",
        alternativas: [

            {
                texto: "O rap teve um impacto significativo na indústria musical global, influenciando uma ampla gama de gêneros e tendências culturais, e desempenhando um papel importante na popularização de novos estilos musicais e movimentos culturais.",
                afirmacao: "O rap tem desempenhado um papel crucial na indústria musical global, influenciando outros gêneros e tendências culturais e ajudando a popularizar novos estilos e movimentos."
            },
            {
                texto: "O rap tem um impacto limitado na indústria musical global e nas tendências culturais, sendo predominantemente uma forma de música local sem grande influência internacional.",
                afirmacao: "O rap, na verdade, tem um impacto global significativo,influenciando a indústria musical e as tendências culturais em todo o mundo, ao invés de ser uma forma de música com impacto limitado."
            }
        ]
    },
    {
        enunciado: "Qual é a relação entre o rap e o movimento cultural Hip-Hop?",
        alternativas: [
            {
                texto: "O rap é um dos quatro pilares do movimento cultural Hip-Hop, que também inclui o breakdance, o graffiti e o DJing, e desempenha um papel fundamental na definição e evolução desse movimento cultural.",
                afirmacao: "O rap é uma parte central do movimento Hip-Hop, junto com outros elementos como breakdance, graffiti e DJing, formando um conjunto cultural que define e evolui o Hip-Hop."
            },
            {
                texto: "O rap é uma forma de música independente que surgiu sem conexão com o movimento cultural Hip-Hop, focando exclusivamente em sua própria evolução artística.",
                afirmacao: "Na verdade, o rap surgiu como parte do movimento Hip-Hop e está intimamente relacionado a ele, influenciando e sendo influenciado pelos outros elementos do movimento."
            }
        ]
    },  
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
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
    caixaPerguntas.textContent = "Resultado...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();