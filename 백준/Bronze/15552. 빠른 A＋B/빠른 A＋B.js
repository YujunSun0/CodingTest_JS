const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
let sum = "";
for(let i=1;i<=N;i++){
    let num = input[i].split(" ");
    sum += +num[0] + +num[1] + "\n";
}

console.log(sum);