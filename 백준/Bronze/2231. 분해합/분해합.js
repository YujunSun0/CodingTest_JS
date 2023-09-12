const N = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let digit = String(N).split("").map(Number);
let num = 1;
let result = 0;

while(num <= digit[0] + (9 * (digit.length - 1))){
    let dec = N - num;
    if(String(dec).split("").map(Number).reduce((acc,cur) => acc + cur) === num) result = dec;
    num++;
}

console.log(result);