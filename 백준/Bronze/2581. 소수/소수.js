const [M,N] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let primeNumbers = [];

for(let i=M; i<=N; i++){
    let num = i;
    let result = [];
    let index = 1;
    while(index <= Math.sqrt(num)){
        if(num % index === 0){
          result.push(index);
          if(num / index !== index) result.push(num / index);
        } 
        index++
    }
    if(result.length === 2) primeNumbers.push(i);
}

if(primeNumbers.length !== 0){
console.log(primeNumbers.reduce((acc,cur) => acc + cur));
console.log(primeNumbers[0]);
} else {
    console.log(-1);
}