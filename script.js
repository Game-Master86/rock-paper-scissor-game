function getComputerChoice() {
    num = Math.random() * 10;
    
    if (num < 3) {
        return 1; // Rock
    }
    else if (num >= 3 && num < 6) {
        return 2; // Paper
    }
    else {
        return 3; // Scissor
    }
}


function printSelectedCard(who, input) {
    if (input == 1) {
        console.log(`${who} selected Rock`);
    }
    else if (input == 2) {
        console.log(`${who} selected Paper`);
    }
    else {
        console.log(`${who} selected Scissor`);
    }
}

function printResult(user_input, computer_input, score) {
    if (user_input == 1) {
        if (computer_input == 1) {
            console.log(" - Tie");
        }
        else if (computer_input == 2) {
            console.log(" - Lost");
        }
        else {
            console.log(" - Won");
            score++;
        }
    }
    else if (user_input == 2) {
        if (computer_input == 1) {
            console.log(" - Won");
            score++;
        }
        else if (computer_input == 2) {
            console.log(" - Tie");
        }
        else {
            console.log(" - Lost");
        }
    }
    else {
        if (computer_input == 1) {
            console.log(" - Lost");
        }
        else if (computer_input == 2) {
            console.log(" - Won");
            score++;
        }
        else {
            console.log(" - Tie");
        }
    }

    return score;
}

console.log("\n--> Menu:\n  1. Rock\n  2. Paper\n  3. Scissor\n");
let tries = 3;
let score = 0;

while (tries > 0) {
    let user_input = parseInt(prompt("\n - Enter your selection: "));
    if (user_input < 1 || user_input > 3) {
        continue;
    }
    console.log("\n");
    printSelectedCard("You", user_input);

    let computer_input = getComputerChoice();
    printSelectedCard("Computer", computer_input);

    score = printResult(user_input, computer_input, score);

    tries--;
}

console.log(`\n--> Your score is ${score}`);