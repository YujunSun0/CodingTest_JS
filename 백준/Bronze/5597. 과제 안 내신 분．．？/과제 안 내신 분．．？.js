const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(el => +el);

let arr = []

for(let i=1; i<31; i++){
    !input.includes(i) ? arr.push(i) : null;
}

arr.sort((a,b) => a-b);
console.log(`${arr[0]}\n${arr[1]}`)