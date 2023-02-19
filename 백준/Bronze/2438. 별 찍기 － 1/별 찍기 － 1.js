const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = +input;
let sum = "";

for(let i=1; i <= N; i++){
    sum += "*";
    console.log(sum);
}