"use strict";
// let userScore:any = document.querySelector("#user-score");
// let compScore:any = document.querySelector("#comp-score");
// let choices = document.querySelectorAll(".choice");
// let msg: any = document.querySelector("#msg");
// const compChoice = () => {
//   const option = ["Rock", "Paper", "Scissors"];
//   return option[Math.floor(Math.random() * 3)];
// };
// const drawGame = () => {
//   msg.innerText = "It Draw";
// };
// const playGame = (userChoice: any) => {
//   console.log("User Choice: ", userChoice);
//   const comCh: any = compChoice();
//   console.log("Computer Choice ", comCh);
//   if (userChoice == comCh) {
//     msg.innerText = "Draw ";
//   } else {
//     let userwin: any = true;
//     if (userChoice === "Rock") {
//       userwin = comCh === "Paper" ? false : true;
//     } else if (userChoice === "Paper") {
//       userwin = comCh === "Scissors" ? false : true;
//     } else if (userChoice === "Scissor") {
//       userwin = comCh === "Rock" ? false : true;
//     }
//     if (userwin) {
//       msg.innerText = "User Win";
//       userScore.innerText++
//     } else {
//       msg.innerText = "Computer Win";
//       compScore.innerText++;
//     }
//   }
// };
// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     // console.log("User Choice",userChoice);
//     playGame(userChoice);
//   });
// });
// Ensure proper typing for DOM elements
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// Function to randomly select the computer's choice
const compChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
};
// Function to handle a draw
const drawGame = () => {
    if (msg)
        msg.innerText = "It's a Draw!";
};
// Main game logic
const playGame = (userChoice) => {
    if (!userChoice)
        return; // Ensure the userChoice exists
    console.log("User Choice: ", userChoice);
    const comCh = compChoice();
    console.log("Computer Choice: ", comCh);
    if (userChoice === comCh) {
        if (msg)
            msg.innerText = "It's a Draw!";
    }
    else {
        let userWin = false;
        // Determine winner based on choices
        if (userChoice === "Rock") {
            userWin = comCh === "Scissors";
        }
        else if (userChoice === "Paper") {
            userWin = comCh === "Rock";
        }
        else if (userChoice === "Scissors") {
            userWin = comCh === "Paper";
        }
        if (userWin) {
            if (msg)
                msg.innerText = "User Wins!";
            if (userScore)
                userScore.innerText = `${parseInt(userScore.innerText) + 1}`;
        }
        else {
            if (msg)
                msg.innerText = "Computer Wins!";
            if (compScore)
                compScore.innerText = `${parseInt(compScore.innerText) + 1}`;
        }
    }
};
// Add event listeners to choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Retrieve the user's choice
        playGame(userChoice);
    });
});
