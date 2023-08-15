// 최소값 구하기 : 연산자에 -가 있을 때, -를 기준으로 괄호를 치면 될듯. 연산자가 +만 있거나 -만 있으면 괄호 상관x 
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const divMinus = input.split("-");
const result = divMinus.map(el => el.includes("+") === true ? el.split("+").map(el=>+el).reduce((acc,cur)=>acc+cur) : +el)

console.log(result.reduce((acc,cur) => acc - cur));