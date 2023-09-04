let [N] = require("fs").readFileSync("/dev/stdin").toString().trim().split().map(Number);
let quotient = 2;
let result = [];

while(N !== 1){
    if(N % quotient === 0){
        result.push(quotient);
        N /= quotient;
    } else {
        quotient++   
    }
}

result.forEach(el => console.log(el))