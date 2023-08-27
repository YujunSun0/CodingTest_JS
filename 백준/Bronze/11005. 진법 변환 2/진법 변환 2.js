const [N,B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const result = (N).toString(B);

console.log(result.toUpperCase());