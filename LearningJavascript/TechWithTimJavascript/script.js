//Quiz Game
const prompt = require("prompt-sync")();
console.log("Welcome to the Quiz!");
let correctAnswers = 0;
const totalQuestions = 3;
//Question 1
const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
    console.log("Correct!");
    correctAnswers++;
}else{
    console.log("You got it wrong...");
}

//Question 2
const answer2 = prompt("What is better a 3090ti or a 4060? ");
const correct_answer2 = "3090ti";

if (answer2.toLowerCase() === correct_answer2) {
    console.log("Correct!");
    correctAnswers++;
}else{
    console.log("You got it wrong...");
}

//Question 3
const answer3 = prompt("What is the recommended amount of RAM in 2023? ");
const correct_answer3 = "16GB";

if (answer3.toUpperCase() === correct_answer3) {
    console.log("Correct!");
    correctAnswers++;
}else{
    console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers/totalQuestions)*100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", percent.toString()+ "%");
