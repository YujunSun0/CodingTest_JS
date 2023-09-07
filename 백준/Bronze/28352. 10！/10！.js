const [N] = require("fs").readFileSync("/dev/stdin").toString().trim().split().map(Number);

let second = 1;

for(let i=N; i>=1; i--){
    second *= i;
}
// 1주는 604800초
console.log(Math.floor(second / 604800));