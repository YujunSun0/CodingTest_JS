const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N,K] = input[0].split(" ").map(Number);
let weights = input[1].split(" ").map(Number).sort((a,b) => a-b);
let cnt = 0;

while(weights.length > 1){
     if(weights[0] + weights[weights.length-1] <= K){
         weights.shift();
         weights.pop();
         cnt++;
     } else {
         weights.pop();
     }
}

console.log(cnt);

