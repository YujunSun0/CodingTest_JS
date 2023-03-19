const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = input[0].split("");
const i = +input[1];

console.log(arr[i-1]);