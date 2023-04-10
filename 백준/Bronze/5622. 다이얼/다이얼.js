const input = require("fs").readFileSync("/dev/stdin").toString().split("");

for(let i=0; i<input.length; i++){
    if(input[i] === "A" || input[i] === "B" || input[i] === "C") input[i] = 3;
    if(input[i] === "D" || input[i] === "E" || input[i] === "F") input[i] = 4;
    if(input[i] === "G" || input[i] === "H" || input[i] === "I") input[i] = 5;
    if(input[i] === "J" || input[i] === "K" || input[i] === "L") input[i] = 6;
    if(input[i] === "M" || input[i] === "N" || input[i] === "O") input[i] = 7;
    if(input[i] === "P" || input[i] === "Q" || input[i] === "R" || input[i] === "S") input[i] = 8;
    if(input[i] === "T" || input[i] === "U" || input[i] === "V") input[i] = 9;
    if(input[i] === "W" || input[i] === "X" || input[i] === "Y" || input[i] === "Z") input[i] = 10;
}

console.log(input.reduce((acc,cur) => acc + cur));