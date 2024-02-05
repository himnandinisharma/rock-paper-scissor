let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgs = document.querySelector("#msgs");

let userScoreCount = document.querySelector("#user-score");
let compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rndindx = Math.floor(Math.random() * 3);
    return options[rndindx];
}
const draw = () => {

    msgs.innerText = "oops its a draw";
    msgs.style.backgroundColor = 'lightcoral';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;


        msgs.innerText = `you win ${userChoice} beats ${compChoice}`;
        msgs.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreCount.innerText = compScore;


        msgs.innerText = msgs.innerText = `you loses ${compChoice} beats ${userChoice}`;
        msgs.style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if (userChoice === compChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice is clicked",userChoice);
        playGame(userChoice)
    })

})