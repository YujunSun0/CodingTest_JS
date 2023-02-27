const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]
const arr = input[1].split(" ").map(el => +el);
let max = arr[0]; 
let min = arr[0]; 

for(let i=1; i<N; i++){
    max < arr[i] ? max = arr[i] : (min > arr[i] ? min = arr[i] : null ); 
}
console.log(min,max)