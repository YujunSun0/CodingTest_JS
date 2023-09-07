const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
let x = [];
let y = [];

for(let i=1; i<=N; i++){
    let arr = input[i].split(" ").map(Number);
    x.push(arr[0]);
    y.push(arr[1]);
}

console.log((Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)))