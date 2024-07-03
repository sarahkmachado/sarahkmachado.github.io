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
    {
        enunciado: "pq o nome dele é blueface",
        alternativas: [
            {
                texto: "Pq ele tem o rosto azul",
                afirmacao: "vdd é isso memo"
            },
            {
                texto: "pq ele é um criminoso gangstar que participa de uma gang chamada cripy",
                afirmacao: "ele é perigoso"
            }
        ]
    },
    {
        enunciado: "Complete a frase (Caneta ..... ..... Caneta)",
        alternativas: [
            {
                texto: "Azul - Azul",
                afirmacao: "caneta azul azul caneta"
            },
            {
                texto: "Schnitzel - Schnitzel",
                afirmacao: "Cante chnitzel chnitzel Caneta"
            }
        ]
    },
    {
        enunciado: "quem falou essa frase (Mlk calvo não cola com nois)",
        alternativas: [
            {
                texto: "Derek",
                afirmacao: "The fato não colamos com calvo"
            },
            {
                texto: "Justin bieber",
                afirmacao: "Ele nem fala brasileiro KAKAKAKA"
            }
        ]
    },
    {
        enunciado: "Cante azul vai ter filho? liltle bluepen",
        alternativas: [
            {
                texto: "Sim, ele vai soltar mt tinta",
                afirmacao: "O caneta soltou a tinta"
            },
            {
                texto: "Não ele é de deus",
                afirmacao: "Até parece KAKAKAKA"
            }
        ]
    },
    {
        enunciado: "Seggundoo Luckhaos ele etava batendo punhe Aonde?",
        alternativas: [
            {
                texto: "No Ventilador",
                afirmacao: "Ta certo"
            },
            {
                texto: "No microondas",
                afirmacao: "Errado "
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
