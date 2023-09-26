const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M] = arr.shift().split(" ").map(Number);
const S = arr.splice(0,N);
let set = new Set(S);
let result = 0;

arr.map((el) => {
    if(set.has(el)) result++;
})

console.log(result);