const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const StringToNumber = (ele) => {
    return ele.split(" ").map(Number);
}

const [N,M] = StringToNumber(input[0]);
let A = new Set(StringToNumber(input[1]));
let B = new Set(StringToNumber(input[2]));
let answer = new Set([...A, ...B]);

A.forEach(a =>{
    if(B.has(a)) answer.delete(a) 
})

console.log(answer.size)