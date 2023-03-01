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
  console.log(question);
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
