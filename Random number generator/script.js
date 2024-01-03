const roll = document.getElementById("roll");
const label = document.getElementById("nr");
const minIn = document.getElementById("min");
let min = Number(minIn.value);
const maxIn = document.getElementById("max");
let max = Number(maxIn.value);
console.log(min, max);
function ran(min, max) {
    let rnd = Math.floor(Math.random() * (max-min+1) + min);
    return rnd;
}

roll.onclick = function() {
    random = ran(min, max);
    label.textContent = random;
}

minIn.onclick = function() {
    min = Number(minIn.value);
}

maxIn.onclick = function() {
    max = Number(maxIn.value);
}