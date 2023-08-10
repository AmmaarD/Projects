const prompt = require("prompt-sync")();

const target = 1 + Math.round(Math.random()* 99);
//console.log(target);

let guesses = 0;

let guess = 0;

while(guess !== target) {
    guess = Number(prompt("guess the number (1-100): "));
    if(guess > target) {
        console.log("Too high");
    }else if(guess < target) {
        console.log("Too low");
    }else{
        break;
    }
    guesses++;
}

console.log("You guessed it! The number was: "+ guess.toString());
console.log("It took you", guesses, "guesses");