/* === DADOS DO QUIZ (mantidos) === */
const allQuestions = [
  {
    question: "Quem atuou como protagonista no filme 'Clube da Luta'?",
    options: ["Morgan Freeman", "Virginia", "Donald Trup", "Brad Pitt"],
    correctOption: 3
  },
  {
    question: "Quem escreveu a música 'Talvez você precise de mim'?",
    options: ["Veigh", "Tupac", "Quenia Oeste", "J. Eskine"],
    correctOption: 0
  },
  {
    question: "Qual dos alimentos a seguir é tóxico para o corpo?",
    options: ["Suco de Laranja", "Mola retirada de um trator Jhon Deer", "Água Sanitária", "Tijolo"],
    correctOption: 2
  },
  {
    question: "Quem é maior, Neymar ou Cafu?",
    options: ["Neymar", "Cafu"],
    correctOption: 1 
  },
  {
    question: "Quem escreveu 'Romeu e Julieta'?",
    options: ["Rony (do Palmeiras)", "William Shakespeare", "Luva de Pedreiro", "Jon Vlogs"],
    correctOption: 0
  },
  {
    question: "Qual o maior planeta do sistema solar?",
    options: ["Maumauzk", "Thais Carla", "Duzão - é +", "Gordão da XJ"],
    correctOption: 2
  },
  {
    question: "Com quantos anos o Pelé morreu?",
    options: ["4", "82", "Não sei", "ELE MORREU?"],
    correctOption: 3
  },
  {
    question: "Onde foi feito o muro de Berlim?",
    options: ["Belem do Pará", "Xique-Xique na Bahia", "Anta Gorda", "Não-Me-Toque", "Berlim"],
    correctOption: 4
  },
  {
    question: "Qual dos elementos a seguir é enssencial para rodar um carro?",
    options: ["Moster Branco", "Agua", "Gasolina", "Mijo de Camelo"],
    correctOption: 3
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Vinicius Jr", "Mbappe", "Welligton Rato", "Neymar Jr"],
    correctOption: 2
  },
  {
    question: "Qual é o maior Podcast do Brasil?",
    options: ["PodPah", "PodPWO"],
    correctOption: 1
  },
  {
    question: "Qual é a capital da França?",
    options: ["Berlim", "Santa Cruz da Paraiba", "Parecida do Norte", "Paris"],
    correctOption: 1
  },
];

let currentQuestionIndex = 0;
let score = 0;

/* === ELEMENTOS DOM === */
const startButton = document.getElementById('startGame');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('nextQuestion');
const scoreDisplay = document.getElementById('score');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);

/* === FUNÇÕES DO QUIZ === */
function startGame() {
  startButton.style.display = 'none';
  quizContainer.style.display = 'block';
  scoreDisplay.style.display = 'none';
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = allQuestions[currentQuestionIndex];
  questionElement.textContent = q.question;
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-btn');
    btn.addEventListener('click', () => selectOption(index, btn));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(index, btn) {
  const q = allQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(b => b.disabled = true);

  if (index === q.correctOption) {
    btn.style.backgroundColor = '#38b000';
    btn.style.color = '#fff';
    score++;
  } else {
    btn.style.backgroundColor = '#d62828';
    btn.style.color = '#fff';
    buttons[q.correctOption].style.backgroundColor = '#38b000';
    buttons[q.correctOption].style.color = '#fff';
  }

  nextButton.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < allQuestions.length) {
    showQuestion();
  } else {
    endGame();
  }
}
function endGame() {
  quizContainer.style.display = 'none';
  scoreDisplay.style.display = 'block';
  scoreDisplay.textContent = `Você acertou ${score} de ${allQuestions.length} perguntas!`;
  startButton.textContent = 'Jogar Novamente';
  startButton.style.display = 'inline-block';
}