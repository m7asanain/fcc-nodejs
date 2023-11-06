const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(
    `What is ${num1} + ${num2}? \n`,
    (userInput) => {
        if (userInput.trim() == answer) {
            rl.close();
        } else {
            rl.setPrompt("Incorrect respon pleace try again \n");
            rl.prompt();
            rl.on('line', (userInput) => {
                if (userInput.trim() == answer) {
                    rl.close();
                } else {
                    rl.setPrompt(`Your answer \'${userInput}\' is incorrect - please try again. \n`);
                    rl.prompt();
                }
            });
        } 
    }
);

rl.on('close', () => {
    console.log("Correct!!!!");
});


/*

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomNumbers() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    return { num1, num2, answer };
}

function askQuestion() {
    const { num1, num2, answer } = generateRandomNumbers();
    rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
        if (parseInt(userInput, 10) === answer) {
            console.log("Correct!!!!");
            rl.close();
        } else {
            console.log(`Your answer '${userInput}' is incorrect - please try again.`);
            askQuestion(); // Re-ask the question
        }
    });
}

rl.on('close', () => {
    console.log("Goodbye!");
});

askQuestion(); // Start asking the question


*/