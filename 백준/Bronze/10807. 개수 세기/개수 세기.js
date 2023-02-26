const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S, V] = input
const result = S.split(" ").filter(el => el === V).length;
console.log(result);