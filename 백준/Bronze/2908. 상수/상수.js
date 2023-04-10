const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let A = input[0].split("").reverse().join("");
let B = input[1].split("").reverse().join("");

console.log(Math.max(+A, +B))