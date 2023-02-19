const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let sum = "";

for(let i=1; i<= +input[0]; i++){
    let result = input[i].split(" ").map(el=>+el);
    sum += `Case #${i}: ${result[0]} + ${result[1]} = ${result[0]+result[1]}\n`;
}

console.log(sum);