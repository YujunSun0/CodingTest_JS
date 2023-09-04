let [N] = require("fs").readFileSync("/dev/stdin").toString().trim().split().map(Number);
let quotient = 2;
let result = [];

    // 소수 판별
    let index = 1;
    while(index <= Math.sqrt(N)){
        if(N % index === 0){
          result.push(index);
          if(N / index !== index) result.push(N / index);
        } 
        index++
    }

    if(result.length === 2){
        console.log(N);
    } else {
        result = [];
        while(N !== 1){
    if(N % quotient === 0){
        result.push(quotient);
        N /= quotient;
    } else {
        quotient++   
    }
}
    result.forEach(el => console.log(el))
    }