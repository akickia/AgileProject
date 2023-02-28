// let data = []
// async function fetchQuestions() {
//   try {
//     const response = await fetch("questions.json")
//     data = await response.json()
//     data = data.questions.question
//     generateRandomQuestion()
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

// function generateRandomQuestion() {
//   let randomQuestion = data[(Math.floor(Math.random() * (data.length)))]
//   console.log(randomQuestion)
//   showQuestionUI(randomQuestion)
// }

// function showQuestionUI(randomQuestion) {
//   let questionEl = document.querySelector(".question")
//   questionEl.innerHTML = randomQuestion.question
// }

// let formEl = document.querySelector("form")
// formEl.addEventListener("submit", getAnswers)



// function getAnswers(event) {
//   event.preventDefault()
//   const input = new FormData(event.target)
//   const name = input.get('name')
//   const answer = input.get('answer')
//   saveAnswersToJson(name, answer)
// }

// function saveAnswersToJson(name, answer) {
//   class Answers {
//     constructor (name, answer) {
//       this.name = name;
//       this.answer = answer;
//     }}
//     const savedAnswer = new Answers()
// }

console.log("hej")

// fetchQuestions()