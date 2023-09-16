let input = require("fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")
.map(Number);

let N = input.shift();
let result = "";
// 범위가 -1000000 ~ 1000000 이므로 수는 2000001가지가 나올 수 있다.
let arr = new Array(2000001).fill(0);

// index는 -가 될 수 없기 때문에 +1000000을 해준다.
for(let i = 0; i < N; i++){
    arr[input[i]+1000000]++;
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1) result += `${i-1000000}\n`;
}

console.log(result.trim());