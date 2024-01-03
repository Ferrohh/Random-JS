const min = 1;
const max = 100;

const message = document.getElementById("message");

const tri = document.getElementById("try");
const reset = document.getElementById("reset");
const numIn = document.getElementById("num");

const attemptsLabel = document.getElementById("attempts");
const tried = document.getElementById("tried");
let attempts = 0;

let random;

random = Math.floor(Math.random() * (max-min+1)) + min;
reset.onclick = function() {
    random = Math.floor(Math.random() * (max-min+1)) + min;
}
console.log(random)
tri.onclick = function() {
    let num = Number(numIn.value);
    if(isNaN(num)) {
        message.textContent = "Please, type a number";
    }
    else if(num < min || num > max) {
        message.textContent = `The number must be between ${min} and ${max}`;
    }
    else if(num == random) {
        message.textContent = "Congratulations! You guessed the right number!\nType another number to play again!";
        attempts = 0;
        tried.textContent = num;
    }
    else {
        attempts++;
        attemptsLabel.textContent = attempts;
        tried.textContent = num;
        if(num < random) {
            message.textContent = "The number is too low!";
        } else {
            message.textContent = "The number is too high!";
        }
        
    }
    numIn.value = "";
}

reset.onclick = function() {
    numIn.textContent = "";
    attempts = 0;
    attemptsLabel.textContent = attempts;
    tried.textContent = 0;
    message.textContent = "Type a number to start!";
}