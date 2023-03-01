let data = [];

async function fetchQuestions() {
  try {
    const response = await fetch("questions.json");
    data = await response.json();
    data = data.questions.question;

    generateRandomQuestion();
  } catch (error) {
    console.log(error);
  }
}

function generateRandomQuestion() {
  let randomQuestion = data[Math.floor(Math.random() * data.length)];

  showQuestionUI(randomQuestion);
}

function showQuestionUI(randomQuestion) {
  let questionEl = document.querySelector(".question");
  questionEl.innerHTML = randomQuestion.question;
}

let formEl = document.querySelector("form");
formEl.addEventListener("submit", getAnswers);

function getAnswers(event) {
  event.preventDefault();
  const input = new FormData(event.target);
  const name = input.get("name");
  const answer = input.get("answer");

  checkResult(name, answer);

  // saveAnswersToJson(name, answer);
}

function checkResult(name, answer) {
  let question = document.querySelector(".question").innerHTML;

  let index = data.findIndex((q) => q.question == question);

  if (data[index].answer == answer) {
    console.log("yaaay");
    let correctModal = document.querySelector("form");
    correctModal.innerHTML = `
    <h3>Congratulations ${name}, your guess was correct!</h3>
  `;
  } else {
    console.log("nay");
    let incorrectModal = document.querySelector("form");
    incorrectModal.innerHTML = `
    <h2>Whua whua... ${name}, your guess was incorrect, <br> better luck next week!</h2>`;
  }
}

// function saveAnswersToJson(name, answer) {
//   class Answers {
//     constructor(name, answer) {
//       this.name = name;
//       this.answer = answer;
//     }
//   }
//   const savedAnswer = new Answers(name, answer);

//   // const fs = require("fs");
//   // let answerFile = fs.readFileSync("answers.json");
//   // parsedAnswerFile = JSON.parse(answerFile);
//   // console.log(parsedAnswerFile);
//   // savedAnswerToFile = JSON.stringify(savedAnswer);
//   // fs.writeFileSync("answers.json", savedAnswerToFile, (err) => {
//   //   if (err) throw err;
//   //   console.log("new data added");
//   // });
// }

// function showResult(name, answer) {
//   if(answer ==)
// }

fetchQuestions();
