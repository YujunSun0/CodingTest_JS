const input = require("fs").readFileSync("/dev/stdin").toString();
const N = Number(input);
let count = 1; 
let room = 1;

while(room < N){
    room += 6 * count;
    count++;
}

console.log(count);