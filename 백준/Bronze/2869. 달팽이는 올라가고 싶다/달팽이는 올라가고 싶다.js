const [A,B,V] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let day = A - B;
const distance = V - B;

day === 1 ? console.log(distance) : console.log(Math.ceil(distance / day));