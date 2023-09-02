const [N,K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = [];
let index = 1;

while(index <= Math.sqrt(N)){
    if (N % index === 0) {
        result.push(index)
        if (N / index !== index) result.push(N / index)
      }
      index++
}
result.sort((a, b) => a - b);

result.length <= K - 1 ? console.log(0) : console.log(result[K-1])