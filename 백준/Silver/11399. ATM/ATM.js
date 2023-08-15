const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const sortedArr = input[1].split(" ").map(el => +el).sort((a,b) => a-b);
let result = 0;
// [1,2,3,3,4] 반복문으로 합을 구해보자.

for(let i = 0; i < N; i++){
   const findIndex = sortedArr.slice(0,i+1)
   result += findIndex.reduce((acc,cur) => acc + cur)
}

console.log(result);
