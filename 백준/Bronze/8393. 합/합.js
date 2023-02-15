const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = +input;

console.log(num*(num+1)/2)