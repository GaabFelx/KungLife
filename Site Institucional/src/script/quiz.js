const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Quais locais são considerados o berço das Artes Marciais?",
    answers: [
      { text: "Japão e China", correct: false },
      { text: "China e Tailândia", correct: false },
      { text: "China e Índia Antiga ", correct: true },
      { text: "Japão e Coreia do Sul", correct: false }
    ]
  },
  {
    question: "Em qual país e em qual ano foi criado o Judô?",
    answers: [
      { text: "Japão - 1882", correct: true },
      { text: "China - 1880", correct: false },
      { text: "Japão - 1785", correct: false },
      { text: "Índia - 1763", correct: false }
    ]
  },
  {
    question: 'Quem é considerado o maior boxeador de todos os tempos?',
    answers: [
      { text: ' Muhammad Ali', correct: true },
      { text: 'Mike Tyson', correct: false },
      { text: 'Popó', correct: false },
      { text: "Maomé Ali", correct: false }
    ]
  },
  {
    question: 'Osoto Gari é um golpe do Boxe?',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Qual desses golpes não é um golpe do Boxe?',
    answers: [
      { text: 'Jab', correct: false },
      { text: 'Guilhotina', correct: true },
      { text: 'Direto', correct: false },
      { text: 'Uppercut', correct: false }
    ]
  },
  {
    question: 'Qual é a arte marcial mais antiga conhecida?',
    answers: [
      { text: 'Kung Fu', correct: false },
      { text: 'Shuai-Chiao', correct: true },
      { text: 'Karatê', correct: false },
      { text: 'Jujutsu', correct: false }
    ]
  },
  {
    question: 'Quantas faixas existem no Karatê Shotokan?',
    answers: [
      { text: '8', correct: false },
      { text: '11', correct: false },
      { text: '7', correct: true },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'Quantas faixas existem no Judô?',
    answers: [
      { text: '11', correct: true },
      { text: '10', correct: false },
      { text: '7', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Quem pratica Taekwondo é chamado de:',
    answers: [
      { text: 'Taekwondista', correct: true },
      { text: 'Taekwondoca', correct: false },
      { text: 'Taekwondeca', correct: false },
      { text: 'Taekwondoquista', correct: false }
    ]
  },
  {
    question: 'Em qual arte marcial golpear o rosto do adversário não é permitido?',
    answers: [
      { text: 'Kung Fu', correct: false },
      { text: 'Taekwondo', correct: false },
      { text: 'Judô', correct: true },
      { text: 'Jiujitsu', correct: false }
    ]
  }
]