const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
let x = [];
let y = [];

for(let i=1; i<=N; i++){
    let arr = input[i].split(" ").map(Number);
    x.push(arr[0]);
    y.push(arr[1]);
}

x.sort((a,b) => b - a);
y.sort((a,b) => b - a);

console.log((x[0] - x[x.length-1]) * (y[0] - y[y.length-1]));