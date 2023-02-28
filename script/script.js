let data = []
async function fetchQuestions() {
  try {
    const response = await fetch("questions.json")
    data = await response.json()
    data = data.questions.question
    generateRandomQuestion()
  }
  catch (error) {
    console.log(error)
  }
}

function generateRandomQuestion() {
  let randomQuestion = data[(Math.floor(Math.random() * (data.length)))]
  console.log(randomQuestion)
  showQuestionUI(randomQuestion)
}

function showQuestionUI(randomQuestion) {
  let questionEl = document.querySelector(".question")
  questionEl.innerHTML = randomQuestion.question
}

fetchQuestions()