const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;
let choice = "";
const choices = ["rock", "paper", "scissors", "rock"];


while(choice !== "q") {
    console.log();
    choice = prompt("Enter rock, paper, or scissors (or q for quit): ");
    if(choice === "q") {
        break;
    }
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log("Please enter rock, paper, or scissors.");
    }

    const randIndex = Math.floor(Math.random()*3);
    const comChoice = choices[randIndex];
    console.log("Computer plays", comChoice, "and Player plays", choice);

    if(comChoice === choice) {
        console.log("Tie!")
        ties++;
    }else if(choice === choices[randIndex+1]) {
        console.log("Player wins!" + " (" + choice + " beats " + comChoice + ")");
        wins++;
    }else{
        console.log("Computer wins!" + " (" + comChoice+" beats " + choice +")");
        losses++;
    }
}

console.log("\nThanks for Playing:");
console.log("Scores:");
console.log("Ties:", ties);
console.log("Wins:", wins);
console.log("Losses:", losses);
