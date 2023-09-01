const [A,B,V] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const day = A - B;
const distance = V - B;

console.log(Math.ceil(distance / day));