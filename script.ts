let userScore:any = document.querySelector("#user-score");
let compScore:any = document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");
let msg: any = document.querySelector("#msg");

const compChoice = () => {
  const option = ["Rock", "Paper", "Scissors"];
  return option[Math.floor(Math.random() * 3)];
};
const drawGame = () => {
  msg.innerText = "It Draw";
};
const playGame = (userChoice: any) => {
  console.log("User Choice: ", userChoice);
  const comCh: any = compChoice();
  console.log("Computer Choice ", comCh);
  if (userChoice == comCh) {
    msg.innerText = "Draw ";
  } else {
    let userwin: any = true;
    if (userChoice === "Rock") {
      userwin = comCh === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userwin = comCh === "Scissors" ? false : true;
    } else if (userChoice === "Scissor") {
      userwin = comCh === "Rock" ? false : true;
    }
    if (userwin) {
      msg.innerText = "User Win";
      userScore.innerText++
    } else {
      msg.innerText = "Computer Win";
      compScore.innerText++;
    }
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("User Choice",userChoice);
    playGame(userChoice);
  });
});
