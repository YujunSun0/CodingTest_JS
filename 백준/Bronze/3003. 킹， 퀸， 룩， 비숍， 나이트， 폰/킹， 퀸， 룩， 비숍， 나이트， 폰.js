const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const chess = [1, 1, 2, 2, 2, 8];

let answer = input.map((i, index) => {
  return chess[index] - i;
})

console.log(...answer)