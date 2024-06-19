const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "no hip hop existe varios tipos de SUBGÊNEROS entre trap e boombap qual você escolhe?",
        alternativas: [
            {
                texto: "o bagulho é trap",
                afirmacao: "BRABO TRAP É SUPERIOR, "
            },
            {
                texto: "o bagulho é boombap",
                afirmacao: "QUENTE BOOMBAP É SUPERIOR, "
            }
        ]
    },
    {
        enunciado: "Esscolha um cantor",
        alternativas: [
            {
                texto: "TRAP - Blueface",
                afirmacao: "Blueface é zika mesmo, "
            },
            {
                texto: "BOOMBAP - Pumapjl",
                afirmacao: "Pumapjl é zika mesmo, "
            }
        ]
    },
    {
        enunciado: "Oque você acha das letras no hiphop?",
        alternativas: [
            {
                texto: "muito boas ",
                afirmacao: "Sim adoro as letras que falam de drgoas e bithesssss, "
            },
            {
                texto: "Escuto pelas batidas",
                afirmacao: "Batida envolvente e letras fracas de baixo calão, "
            }
        ]
    },
    {
        enunciado: "Oque vocẽ acha de batalha de rima?",
        alternativas: [
            {
                texto: "Ṕerca de tempo",
                afirmacao: "Sou CLT não tenho tempo para bobalhada de rimas, "
            },
            {
                texto: "Mo daora slk",
                afirmacao: "Slk Muito daora os manos são muito foda rimano, "
            }
        ]
    },
    {
        enunciado: "Você acha que hiphop tem haver com a erva magica? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Todo mundo que escuta hiphop é maconheiro.  "
            },
            {
                texto: "Não",
                afirmacao: "Acho que não tem nada haver quem escuta hiphop é maconheiro. "
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
