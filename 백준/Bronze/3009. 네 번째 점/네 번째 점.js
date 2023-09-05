const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number));

let x = input.map((v) => v[0]).sort((a, b) => a - b);
let y = input.map((v) => v[1]).sort((a, b) => a - b);

x = x[0] === x[1] ? x[2] : x[0];
y = y[0] === y[1] ? y[2] : y[0];

console.log(x, y);
