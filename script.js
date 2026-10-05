const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "De que maneira a Inteligência Artificial pode otimizar significativamente a gestão de redes elétricas para acelerar a transição energética sustentável?",
    alternativas: [
      {
        texto: "Analisando dados em tempo real para prever demandas e integrar fontes renováveis.",
        correta: true,
        emoji: "🌱⚡🤖",
        miniHistoria: "Em 2049, você fazia parte da equipe responsável por uma grande rede elétrica inteligente. Certa noite, os sensores perceberam que o consumo aumentaria rapidamente. A Inteligência Artificial reorganizou a distribuição antes que o problema acontecesse, evitando um apagão que poderia atingir milhares de pessoas.",
        afirmacao: "Você escolheu usar dados para antecipar problemas e tornar a distribuição de energia mais eficiente."
      },
      {
        texto: "Substituindo completamente todas as fontes renováveis por combustíveis fósseis.",
        correta: false,
        emoji: "⚠️🔥😕",
        miniHistoria: "Em 2049, você percebeu que uma cidade estava aumentando sua dependência de combustíveis fósseis. Embora a energia estivesse disponível, os níveis de poluição começaram a crescer e a população passou a sentir os efeitos ambientais da decisão.",
        afirmacao: "Sua escolha mostra uma preocupação com a disponibilidade de energia, mas os combustíveis fósseis podem aumentar os impactos ambientais."
      },
      {
        texto: "Equilibrando automaticamente a produção solar, eólica e o consumo da população.",
        correta: true,
        emoji: "☀️🌬️🔋",
        miniHistoria: "Você trabalhava em uma cidade abastecida por energia solar e eólica. Em um determinado dia, o vento diminuiu justamente quando o consumo aumentou. O sistema inteligente transferiu energia de outras fontes e manteve a cidade funcionando sem interrupções.",
        afirmacao: "Você escolheu combinar diferentes fontes renováveis para criar uma rede energética mais estável."
      }
    ]
  },

  {
    enunciado: "Qual seria sua primeira decisão ao assumir o controle dessa rede elétrica inteligente?",
    alternativas: [
      {
        texto: "Priorizar hospitais, escolas e serviços essenciais.",
        correta: true,
        emoji: "🏥💚👏",
        miniHistoria: "Uma forte tempestade atingiu a cidade e parte da rede elétrica começou a falhar. Você decidiu direcionar automaticamente a energia para hospitais e serviços essenciais. Enquanto alguns bairros esperavam pela recuperação da rede, os locais mais importantes continuaram funcionando.",
        afirmacao: "Você colocou a segurança e o bem-estar da população como prioridade."
      },
      {
        texto: "Distribuir a energia igualmente entre todos os bairros.",
        correta: true,
        emoji: "⚡🏘️🤝",
        miniHistoria: "A cidade enfrentava uma grande redução na produção de energia. Em vez de favorecer apenas algumas regiões, você criou um sistema que distribuía a eletricidade de maneira equilibrada. A decisão fez com que todos contribuíssem e enfrentassem juntos aquele período difícil.",
        afirmacao: "Você escolheu uma distribuição equilibrada dos recursos energéticos."
      },
      {
        texto: "Desligar completamente os bairros que consumissem mais energia.",
        correta: false,
        emoji: "🚨🏙️😟",
        miniHistoria: "Durante uma crise energética, você decidiu desligar os bairros que apresentavam maior consumo. A medida reduziu temporariamente a demanda, mas milhares de pessoas ficaram sem eletricidade e a cidade percebeu que seria necessário encontrar uma solução mais equilibrada.",
        afirmacao: "Sua escolha reduziu o consumo, mas uma solução sustentável precisa considerar as necessidades da população."
      }
    ]
  },

  {
    enunciado: "Qual estratégia você escolheria para reduzir o desperdício de energia?",
    alternativas: [
      {
        texto: "Criar sistemas que desliguem equipamentos automaticamente quando não estiverem sendo utilizados.",
        correta: true,
        emoji: "💡🌱👏",
        miniHistoria: "Durante uma inspeção em um prédio público, você descobriu dezenas de computadores e aparelhos ligados durante a madrugada. Um sistema inteligente passou a identificar os equipamentos sem utilização e desligá-los automaticamente. O dinheiro economizado foi destinado à instalação de painéis solares.",
        afirmacao: "Você decidiu combater o desperdício por meio da automação."
      },
      {
        texto: "Ensinar a população a utilizar a energia de maneira mais consciente.",
        correta: true,
        emoji: "📚🌎💚",
        miniHistoria: "Você percebeu que nenhuma tecnologia funcionaria completamente sem a participação das pessoas. Então criou uma campanha educativa que ensinava famílias a reduzir o consumo. Crianças começaram a levar os hábitos sustentáveis para casa e a mudança se espalhou pela cidade.",
        afirmacao: "Você escolheu transformar a conscientização das pessoas em parte da solução."
      },
      {
        texto: "Aumentar o consumo de energia para gerar mais dados para a Inteligência Artificial.",
        correta: false,
        emoji: "⚠️🔌😬",
        miniHistoria: "Você decidiu aumentar o consumo de energia para produzir mais dados. Porém, o sistema rapidamente identificou que o gasto adicional não compensava os benefícios. A cidade precisou rever a estratégia e buscar formas de utilizar menos recursos.",
        afirmacao: "Aumentar o consumo sem necessidade pode gerar desperdício e impactos ambientais."
      }
    ]
  },

  {
    enunciado: "Como você lidaria com a variação da produção de energia solar e eólica?",
    alternativas: [
      {
        texto: "Armazenaria o excesso de energia para utilizá-lo posteriormente.",
        correta: true,
        emoji: "🔋☀️🌱",
        miniHistoria: "Era uma tarde ensolarada e os parques eólicos também produziam energia acima do esperado. Você decidiu armazenar o excedente em grandes baterias. Horas depois, quando o sol desapareceu e o vento diminuiu, aquela energia foi liberada para abastecer a cidade.",
        afirmacao: "Você escolheu utilizar o armazenamento para aproveitar melhor as fontes renováveis."
      },
      {
        texto: "Aumentaria a utilização de energia quando a produção renovável estivesse alta.",
        correta: true,
        emoji: "☀️⚡📈",
        miniHistoria: "A Inteligência Artificial percebeu que a produção de energia seria muito alta durante algumas horas. Você transferiu atividades que consumiam muita energia para esse período. A cidade passou a aproveitar melhor a energia limpa que já estava disponível.",
        afirmacao: "Você decidiu adaptar o consumo aos momentos de maior produção renovável."
      },
      {
        texto: "Ignoraria as mudanças na produção e manteria o sistema funcionando da mesma maneira.",
        correta: false,
        emoji: "⚠️🌧️🔌",
        miniHistoria: "Você decidiu manter a rede funcionando sem considerar as mudanças na produção solar e eólica. Quando o vento diminuiu e as nuvens cobriram os painéis, a produção caiu rapidamente e a rede enfrentou dificuldades para atender à demanda.",
        afirmacao: "Ignorar a variabilidade das fontes renováveis pode dificultar o equilíbrio da rede."
      }
    ]
  },

  {
    enunciado: "Qual é um dos principais desafios ambientais associados ao avanço e ao treinamento em larga escala de modelos de Inteligência Artificial?",
    alternativas: [
      {
        texto: "O alto consumo de energia elétrica e recursos computacionais.",
        correta: true,
        emoji: "🌎⚡🤖",
        miniHistoria: "Você entrou em um enorme centro de dados onde milhares de computadores trabalhavam dia e noite. Percebendo o impacto energético daquele lugar, decidiu criar um projeto para tornar os computadores mais eficientes.",
        afirmacao: "Você identificou o consumo energético como um dos principais desafios ambientais da Inteligência Artificial."
      },
      {
        texto: "A necessidade de grandes centros de processamento e armazenamento.",
        correta: true,
        emoji: "💻🏢🌱",
        miniHistoria: "A quantidade de dados cresceu tanto que novos centros de processamento precisaram ser construídos. Você participou do planejamento de uma dessas estruturas e decidiu aproveitar energia renovável, sistemas de resfriamento eficientes e equipamentos de baixo consumo.",
        afirmacao: "Você reconheceu que a infraestrutura necessária para a Inteligência Artificial também precisa ser sustentável."
      },
      {
        texto: "A Inteligência Artificial diminui automaticamente todos os impactos ambientais.",
        correta: false,
        emoji: "⚠️🤖🌍",
        miniHistoria: "Você acreditava que toda Inteligência Artificial seria automaticamente sustentável. Porém, ao analisar os centros de dados, percebeu que grandes sistemas podem consumir muita energia e recursos.",
        afirmacao: "A Inteligência Artificial pode ajudar na sustentabilidade, mas também possui impactos que precisam ser administrados."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


/* ==========================================
   TELA INICIAL
   ========================================== */

function mostraInicio() {

  // Limpa qualquer conteúdo anterior
  caixaPerguntas.textContent = "";
  caixaAlternativas.textContent = "";
  textoResultado.textContent = "";

  // Volta para a cor original
  caixaPrincipal.classList.remove("acertou", "errou");

  // Título da introdução
  const titulo = document.createElement("h1");

  titulo.textContent = "🌎⚡ Inteligência Artificial e o Futuro";

  caixaPerguntas.appendChild(titulo);

  // Texto da introdução
  const introducao = document.createElement("p");

  introducao.textContent =
    "Estamos em 2049. A Inteligência Artificial transformou a maneira como produzimos energia, cuidamos dos recursos naturais e enfrentamos os desafios ambientais. " +
    "Agora você terá que tomar decisões importantes que poderão mudar o futuro da humanidade.";

  caixaPerguntas.appendChild(introducao);

  // Segundo texto
  const contexto = document.createElement("p");

  contexto.textContent =
    "Cada escolha irá construir uma parte da sua história. Algumas decisões ajudarão a criar um futuro mais sustentável, enquanto outras poderão trazer novos desafios. 🌱🤖";

  caixaPerguntas.appendChild(contexto);

  // Botão de iniciar
  const botaoInicio = document.createElement("button");

  botaoInicio.textContent = "🚀 Iniciar Quiz";

  botaoInicio.addEventListener("click", iniciarQuiz);

  caixaAlternativas.appendChild(botaoInicio);
}


/* ==========================================
   INICIAR QUIZ
   ========================================== */

function iniciarQuiz() {

  atual = 0;

  historiaFinal = "";

  textoResultado.textContent = "";

  caixaAlternativas.textContent = "";

  caixaPerguntas.textContent = "";

  caixaPrincipal.classList.remove("acertou", "errou");

  mostraPergunta();
}


/* ==========================================
   MOSTRAR PERGUNTA
   ========================================== */

function mostraPergunta() {

  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;

  caixaAlternativas.textContent = "";

  // Volta o fundo para o estado normal
  caixaPrincipal.classList.remove("acertou", "errou");

  mostraAlternativas();
}


/* ==========================================
   MOSTRAR ALTERNATIVAS
   ========================================== */

function mostraAlternativas() {

  for (const alternativa of perguntaAtual.alternativas) {

    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa.texto;

    botaoAlternativas.addEventListener("click", () => {

      respostaSelecionada(alternativa);

    });

    caixaAlternativas.appendChild(botaoAlternativas);
  }
}


/* ==========================================
   RESPOSTA SELECIONADA
   ========================================== */

function respostaSelecionada(opcaoSelecionada) {

  // Verifica se a resposta está correta
  if (opcaoSelecionada.correta) {

    caixaPrincipal.classList.remove("errou");

    caixaPrincipal.classList.add("acertou");

  } else {

    caixaPrincipal.classList.remove("acertou");

    caixaPrincipal.classList.add("errou");
  }


  // Guarda a mini-história
  historiaFinal += opcaoSelecionada.miniHistoria + "\n\n";

  // Guarda a afirmação
  historiaFinal += opcaoSelecionada.afirmacao + "\n\n";


  // Mostra a mini-história escolhida
  caixaPerguntas.textContent =
    opcaoSelecionada.emoji + " " +
    opcaoSelecionada.miniHistoria;


  // Remove os botões das alternativas
  caixaAlternativas.textContent = "";


  // Cria mensagem de feedback
  const mensagem = document.createElement("p");


  if (opcaoSelecionada.correta) {

    mensagem.textContent =
      "🎉 Muito bem! Essa escolha contribui para um futuro mais sustentável! 🌱💚";

  } else {

    mensagem.textContent =
      "🤔 Essa escolha apresenta alguns desafios ambientais. Pense em outra possibilidade! 🌎⚠️";
  }


  mensagem.classList.add("mensagem-resposta");

  caixaAlternativas.appendChild(mensagem);


  // Botão continuar
  const botaoContinuar = document.createElement("button");

  botaoContinuar.textContent = "Continuar ➡️";


  botaoContinuar.addEventListener("click", () => {

    atual++;

    mostraPergunta();

  });


  caixaAlternativas.appendChild(botaoContinuar);
}


/* ==========================================
   RESULTADO FINAL
   ========================================== */

function mostraResultado() {

  caixaPrincipal.classList.remove("acertou", "errou");

  caixaPerguntas.textContent = "🌎✨ Em 2049...";

  textoResultado.textContent =
    "🌱 Esta foi a história construída pelas suas escolhas:\n\n" +
    historiaFinal;

  caixaAlternativas.textContent = "";


  // Botão jogar novamente
  const botaoJogarNovamente = document.createElement("button");

  botaoJogarNovamente.textContent = "🔄 Jogar novamente";

  botaoJogarNovamente.addEventListener("click", jogarNovamente);

  caixaAlternativas.appendChild(botaoJogarNovamente);
}


/* ==========================================
   JOGAR NOVAMENTE
   ========================================== */

function jogarNovamente() {

  atual = 0;

  historiaFinal = "";

  textoResultado.textContent = "";

  caixaAlternativas.textContent = "";

  caixaPrincipal.classList.remove("acertou", "errou");

  // Volta para a tela inicial
  mostraInicio();
}


/* ==========================================
   COMEÇA NA TELA DE INTRODUÇÃO
   ========================================== */

mostraInicio();