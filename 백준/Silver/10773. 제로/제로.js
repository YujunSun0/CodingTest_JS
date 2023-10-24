let [K, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const stack = [];

arr.map(el => +el !==0 ? stack.push(+el) : stack.pop());

stack.length !== 0 ? console.log(stack.reduce((acc,cur) => acc + cur)) : console.log(0);
