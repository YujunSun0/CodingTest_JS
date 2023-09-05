const [A,B] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(A * B);