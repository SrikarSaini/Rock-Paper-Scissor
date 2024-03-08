let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const genCompChoice= () =>{
    let options = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};
const showWinner = (userWin, userChoice, compChoice)=>
{
    if(userWin)
    {
        document.getElementById("msg").innerText = `You Win, ${userChoice} beats ${compChoice}`;
        document.getElementById("msg").style.backgroundColor = "#4dff4d";
        userScore++;
        document.getElementById("user-score").innerText = `${userScore}`;
    }
    else
    {
        document.getElementById("msg").innerText = `You Lose, ${compChoice} beats ${userChoice}`;
        document.getElementById("msg").style.backgroundColor = "#ff5c33";
        compScore++;
        document.getElementById("comp-score").innerText = `${compScore}`;
    }
}
const playGame =(userChoice) =>
{
    console.log("User choice- ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice- ",compChoice);
    let userWin = true;
    if(userChoice === compChoice) 
    {
        document.getElementById("msg").innerText = "That's a Draw";
        document.getElementById("msg").style.backgroundColor = "#00bfff";
    }
    else 
    {
        if(userChoice === "rock")
            userWin = compChoice === "paper" ? false : true;
        else if(userChoice ==="paper")
            userWin = compChoice === "scissor" ? false : true;
        else
            userWin = compChoice ==="rock"? false : true;
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const ResetAll = () =>{
        userScore = 0;
        compScore = 0;
        document.getElementById("user-score").innerText ="0";
        document.getElementById("comp-score").innerText ="0";
        document.getElementById("msg").innerText = "Play Your Move";
        document.getElementById("msg").style.backgroundColor = "white";
};
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click",ResetAll);