var you,
  yourScore = 0,
  opp,
  oppScore,
  choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};

function selectChoice() {
  you = this.id;
  document.getElementById("p2-choice").src = you + ".png";

  //random for oppponent
  opp = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
  document.getElementById("p1-choice").src = opp + ".png";

  //check for winner
  if (you == opp) {
    yourScore = yourScore;
    oppScore = oppScore;
  } else {
    if (you == "rock") {
      if (opp == "scissors") {
        yourScore += 1;
      } else if (opp == "paper") {
        oppScore += 1;
      }
    } else if (you == "scissors") {
      if (opp == "paper") {
        yourScore += 1;
      } else if (opp == "rock") {
        oppScore += 1;
      }
    } else if (you == "paper") {
      if (opp == "rock") {
        yourScore += 1;
      } else if (opp == "scissors") {
        oppScore += 1;
      }
    }
  }

  document.getElementById("p2-score").innerText = yourScore;
  document.getElementById("p1-score").innerText = oppScore;
}
