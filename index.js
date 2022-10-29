const p1score = document.querySelector("#p1-score");
const p2score = document.querySelector("#p2-score");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choice");

let p1, p2, result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    p1 = button.textContent;
    computer(); //random of the 3.
    p1score.textContent = `Player:- ${p1}`;
    p2score.textContent = `Computer:- ${p2}`;
    resultText.textContent = winner();
  })
);

function computer() {
  const rnum = Math.floor(Math.random() * 3 + 1);

  switch (rnum) {
    case 1:
      p2 = "ROCK";
      break;
    case 2:
      p2 = "PAPER";
      break;
    case 3:
      p2 = "SCISSORS";
      break;
  }
}

function winner() {
  if (p1 == p2) {
    return "Draw !";
  } else if (p2 == "ROCK") {
    return p1 == "PAPER" ? "Congrats !! 🎉🎉" : "You Lose!!";
  } else if (p2 == "PAPER") {
    return p1 == "SCISSORS" ? "Congrats !! 🎉🎉" : "You Lose!!";
  } else if (p2 == "SCISSORS") {
    return p1 == "ROCK" ? "Congrats !! 🎉🎉" : "You Lose!!";
  }
}
