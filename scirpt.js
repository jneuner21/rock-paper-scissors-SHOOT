//Rock, Paper, Scissors Game

var wins = 0;
var losses = 0;
var ties = 0;

var ComputerChoice= ["rock","paper","scicssors"]

startgame()

function startgame(){
var userInput= prompt("please choose Rock, Paper, or Scissors");
var userChoice = userInput.toLowerCase();

var index = Math.floor(Math.random() * ComputerChoice.length);
var randomChoice = ComputerChoice[index];

alert("Computer chose " + randomChoice)

if(userChoice === randomChoice){
    alert("You tied!!!");
    ties++;
   } else if ((userChoice === "rock" && randomChoice == "scissors")||(userChoice === randomChoice == "rock")||(userChoice === "scissors" && randomChoice == "paper" )){
       alert("You Win!!");
       wins++;
   } else ("You Lost!!!")
   losses++;

   alert (
       "Current Stats: " + " Wins: " + wins + " Losses: " + losses + " Ties: " + ties
   )

   startgame()

   }

