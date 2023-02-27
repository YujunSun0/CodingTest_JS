const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const X = +input[0].split(" ")[1];

const filteredArr = input[1].split(" ").filter(el => el < X);
console.log(filteredArr.join(" "))
