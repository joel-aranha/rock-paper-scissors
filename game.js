let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    computerChoice = Math.floor(Math.random()*3);
    if(computerChoice === 0){
            return("rock");
    }
    else if(computerChoice === 1){
        return("paper");        
    }
    else if(computerChoice === 2){
        return("scissor");        
    }
}
function playerPlay(playerChoice){
    
    if(playerChoice == "rock"||playerChoice == "paper" ||playerChoice == "scissor"){
        return playerChoice;
    }
    
    return "error";
}    
    
function playRound(playerSelection,computerSelection){
    console.log("Player Chose "+ playerSelection);
    console.log("Computer Chose "+ computerSelection);

    if((playerSelection == "rock" && computerSelection == "paper")||(playerSelection == "paper" && computerSelection == "scissor")||(playerSelection == "scissor" && computerSelection == "rock")){
         result = ("You Lose! " + computerSelection + " beats " + playerSelection);
         computerScore++;
    }   
    else if((computerSelection == "rock" && playerSelection == "paper")||(computerSelection =="paper" && playerSelection == "scissor")||(computerSelection == "scissor" && playerSelection == "rock")){
         result = ("You win " + playerSelection+ " beats " + computerSelection);
         playerScore++;
    }
    else{
         result =("It's a tie");
    }  

    return result;
}

function game(){ 
let result = "";
const playerSelection = playerPlay(prompt("Rock, Paper or Scissor").toLowerCase());
const computerSelection = computerPlay();

if(playerSelection == "error"){
    return console.log("Please select either Rock, Paper or scissor");
}
else{
console.log(playRound(playerSelection, computerSelection));
}
}
for(let i = 0;i<5;i++){
game();
console.log("Player Score is "+ playerScore );    
console.log("Computer Score is "+ computerScore );    
}

if(playerScore>computerScore){
    console.log("You Won!");
}
else if(playerScore<computerScore){
    console.log("You lost!");
}
else{
    console.log("It's a Tie");
}

