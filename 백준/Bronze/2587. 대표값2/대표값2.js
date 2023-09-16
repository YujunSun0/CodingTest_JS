const input = require("fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")
.map(Number)
.sort((a,b) => a-b);

console.log(input.reduce((acc,cur) => acc + cur) / input.length);
console.log(input[2]);