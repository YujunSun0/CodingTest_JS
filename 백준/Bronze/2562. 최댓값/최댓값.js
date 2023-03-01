const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(el => +el);
// 최대값의 초기값을 지정
// 반복문들 돌아 최대값을 구한 뒤, 인덱스를 구한다
let max = input[0];
for(let i=1; i< input.length; i++){
    input[i] > max ? max = input[i] : null;
}

console.log(max);
console.log(input.indexOf(max) + 1);
