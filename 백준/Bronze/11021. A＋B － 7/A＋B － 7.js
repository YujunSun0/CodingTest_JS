const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

for(let i=1;i<=N;i++){
    let result = input[i].split(" ").map(el=>+el);
    console.log(`Case #${i}: ${result[0]+result[1]}`)
}
