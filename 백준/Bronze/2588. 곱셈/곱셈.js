const fs=require('fs');
const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const hundredNum = Math.floor(num2/100);
const tenNum = Math.floor((num2/10))%10;
const oneNum = num2%10;

console.log(num1*oneNum);
console.log(num1*tenNum);
console.log(num1*hundredNum);
console.log(num1*num2);