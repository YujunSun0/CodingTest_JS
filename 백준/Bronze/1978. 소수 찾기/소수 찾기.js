const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const numArr = input[1].split(" ").map(Number);
let count = 0;

for(let i=0; i<numArr.length; i++){
    let num = numArr[i];
    let result = [];
    let index = 1;
     while (index <= Math.sqrt(num)) {
      if (num % index === 0) {
        result.push(index)
        if (num / index !== index) result.push(num / index)
      }
      index++
    }
    if(result.length === 2) count++;
}

console.log(count);