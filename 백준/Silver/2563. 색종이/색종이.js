let [N, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");
input = input.map((el) => el.split(" "));
const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < N; i++) {
  let startX = +input[i][0]; 
  let startY = +input[i][1]; 
  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      if (arr[startX + l][startY + m] !== 0) {
        continue;
      }
      if (arr[startX + l][startY + m] === 0) {
        arr[startX + l][startY + m] = 1;
        count++;
      }
    }
  }
}
console.log(count);