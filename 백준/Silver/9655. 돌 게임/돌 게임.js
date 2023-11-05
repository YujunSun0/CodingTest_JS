const [N] = require("fs").readFileSync("/dev/stdin").toString().split().map(Number);

N % 2 === 1 ? console.log("SK") : console.log("CY"); // N이 짝수면 SK, 홀수면 CY