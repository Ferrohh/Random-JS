const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const res = document.getElementById("res");
const countLabel = document.getElementById("count");
let count = Number(countLabel.textContent);
const blwZeroCheck = document.getElementById("blwZero");
let blwZero = true;

inc.onclick = function() {
    count++;
    countLabel.textContent = count;
}

dec.onclick = function() {
    count--;
    
    if(blwZero == false && count < 0) {
        count = 0;
    }
    countLabel.textContent = count;
}

res.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

blwZeroCheck.onclick = function() {
    if (blwZero == true) {
        if (count < 0) {
            count = 0;
            countLabel.textContent = count;
        }
        blwZero = false;
    }
    else {
        blwZero = true;
    }
}