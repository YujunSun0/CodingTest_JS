let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];
let tmp = input[1].split(" ").map(Number);
result = new Object();
answer = "";

let arr = Array.from(new Set(tmp)).sort((a,b)=>a - b);

for(let i = 0 ; i<arr.length;i++){
  result[arr[i]]=i;
}

for(let val of tmp){
  answer += result[val] + " ";
}

console.log(answer.trim())