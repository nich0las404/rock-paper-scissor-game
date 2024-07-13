const gameResult = document.getElementById("game-result")
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
const retry = document.querySelector('.retry-btn');
const dialog = document.querySelector("dialog");
const dialogText = document.querySelector(".dialog-text")
let winScore = 0;
let loseScore = 0

function playGame(choice){
    const choices = [
        'rock',
        'paper',
        'scissor'
    ]
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    switch(choice){
        case 'rock':
            computerChoice === 'scissor'? wonGame() : lostGame()
        break;
        case 'paper':
            computerChoice === 'rock'? wonGame(): lostGame()
        break;
        case 'scissor':
            computerChoice === 'paper'? wonGame(): lostGame()
        break;
    }
    
    if(winScore >= 3){
        winnningModal();
    } 
    
    if(loseScore >= 3){
        losingModal();
    }
}
const resultText = document.createElement('p');

function wonGame(){
    resultText.classList.remove('lose');
    resultText.classList.add('win');
    resultText.textContent = "YOU WON!";
    gameResult.appendChild(resultText);
    playerScore.textContent = ++winScore
}
function lostGame(){
    resultText.classList.remove('win');
    resultText.classList.add('lose');
    resultText.textContent = "YOU LOST :(";
    gameResult.appendChild(resultText);
    computerScore.textContent = ++loseScore
}
function resetGame(){
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    resultText.textContent = "";
    loseScore = 0;
    winScore = 0
}
function winnningModal(){
    dialog.showModal();
    dialog.classList.remove("lose-dialog")
    dialog.classList.add("win-dialog");
    dialogText.textContent = "YOU WON! Congrats :D";
}
function losingModal(){
    const losingDialog = [
        "YOU LOST! HOWD U LOSE TO A BOT D:",
        "I KNEW YOU SUCK BUT NOT THIS HORRIBLE D:",
        "NICE, AS EXPECTED LOSERR",
        'better try again ://///',
        "STOP PICKING ON THE SAME MOVE X_X"
    ]
    dialog.showModal();
    dialog.classList.remove("win-dialog")
    dialog.classList.add("lose-dialog");
    dialogText.textContent = losingDialog[Math.floor(Math.random() * 5)];
}
retry.addEventListener("click", (e) => {
    dialog.close()
})