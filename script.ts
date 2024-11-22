






// Ensure proper typing for DOM elements
const userScore = document.querySelector("#user-score") as HTMLElement | null;
const compScore = document.querySelector("#comp-score") as HTMLElement | null;
const choices = document.querySelectorAll<HTMLElement>(".choice");
const msg = document.querySelector("#msg") as HTMLElement | null;

// Function to randomly select the computer's choice
const compChoice = (): string => {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

// Function to handle a draw
const drawGame = () => {
  if (msg) msg.innerText = "It's a Draw!";
};

// Main game logic
const playGame = (userChoice: string | null) => {
  if (!userChoice) return; // Ensure the userChoice exists

  console.log("User Choice: ", userChoice);
  const comCh = compChoice();
  console.log("Computer Choice: ", comCh);

  if (userChoice === comCh) {
    if (msg) msg.innerText = "It's a Draw!";
  } else {
    let userWin = false;

    // Determine winner based on choices
    if (userChoice === "Rock") {
      userWin = comCh === "Scissors";
    } else if (userChoice === "Paper") {
      userWin = comCh === "Rock";
    } else if (userChoice === "Scissors") {
      userWin = comCh === "Paper";
    }

    if (userWin) {
      if (msg) msg.innerText = "User Wins!";
      if (userScore) userScore.innerText = `${parseInt(userScore.innerText) + 1}`;
    } else {
      if (msg) msg.innerText = "Computer Wins!";
      if (compScore) compScore.innerText = `${parseInt(compScore.innerText) + 1}`;
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
