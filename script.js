const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a influência da cultura pop na sociedade atual?",
        alternativas: [
            {
                texto: "A cultura pop influencia normas sociais e comportamentos.",
                afirmacao: "A cultura pop exerce uma influência significativa, moldando normas sociais e comportamentos em todo o mundo, desde ícones de celebridades até as últimas tendências da moda. "
            },
            {
                texto: "Reflete e responde às tendências e preocupações contemporâneas.",
                afirmacao: "A cultura pop serve como um reflexo dinâmico das preocupações e interesses contemporâneos, oferecendo uma plataforma para a expressão e exploração de ideias em uma escala global."
            }
        ]
    },
    {
        enunciado: " Como a cultura pop se manifesta de forma diferente em diferentes partes do mundo?",
        alternativas: [
            {
                texto: "Varia de acordo com influências locais, como anime no Japão ou K-pop na Coreia do Sul.",
                afirmacao: "A diversidade cultural é evidente na forma como a cultura pop se manifesta, desde os estilos de anime no Japão até a influência do K-pop na Coreia do Sul."
            },
            {
                texto: "Reflete sensibilidades culturais específicas, resultando em manifestações únicas, como gêneros musicais regionais ou adaptações de formatos populares.",
                afirmacao: "A adaptação da cultura pop às sensibilidades locais cria uma tapeçaria rica de expressão cultural, seja através de gêneros musicais regionais ou de interpretações únicas de formatos populares."
            }
        ]
    },
    {
        enunciado: "Como a cultura pop influencia a forma como as pessoas se comunicam e interagem hoje em dia?",
        alternativas: [
            {
                texto: "A cultura pop introduz novos termos, gírias e formas de expressão que são adotados na linguagem cotidiana e nas redes sociais.",
                afirmacao: "A disseminação rápida de memes e hashtags através da cultura pop redefine constantemente a comunicação digital e o humor online."
            },
            {
                texto: "Personagens e situações da cultura pop servem como pontos de referência compartilhados, facilitando conexões entre pessoas com interesses comuns.",
                afirmacao: "A citação de filmes e séries nas interações diárias cria um senso de comunidade e identidade compartilhada entre os fãs."
            }
        ]
    },
    {
        enunciado: "De que maneira a cultura pop influencia as percepções de beleza e padrões estéticos na sociedade contemporânea?Celebridades e ícones da cultura pop frequentemente ditam tendências de moda e beleza, influenciando o que é considerado atraente.",
        alternativas: [
            {
                texto: "Celebridades e ícones da cultura pop frequentemente ditam tendências de moda e beleza, influenciando o que é considerado atraente.",
                afirmacao: "A valorização de diversidade na mídia desafia os padrões estéticos tradicionais, promovendo uma visão mais inclusiva e variada de beleza."
            },
            {
                texto: "Através de mídias como música e cinema, a cultura pop promove uma estética visual que impacta desde a moda até o design de produtos.",
                afirmacao: "A influência de estilos visuais de filmes e videoclipes molda as preferências estéticas e inspira criadores de moda e design."
            }
        ]
    },
    {
        enunciado: "Qual é o impacto da cultura pop na formação de identidades culturais e nacionais ao redor do mundo?",
        alternativas: [
            {
                texto: "A exportação de filmes, músicas e séries de TV ajuda na disseminação de valores e tradições culturais de diferentes países.",
                afirmacao: "A adoção global de elementos culturais específicos fortalece a identidade nacional e promove a compreensão cultural entre nações."
            },
            {
                texto: "A representação de diversidade cultural na mídia pop desafia estereótipos e amplia a compreensão de identidades culturais em contextos globais.",
                afirmacao: "A narrativa de histórias autênticas e inclusivas na cultura pop contribui para uma representação mais precisa e respeitosa de culturas diversas."
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