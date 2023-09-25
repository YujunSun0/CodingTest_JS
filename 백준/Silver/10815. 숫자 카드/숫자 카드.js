const [N,arr1,M,arr2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const cards = new Set(arr1.split(" ").map(Number)); // 가지고 있는 카드
const numbers = arr2.split(" ").map(Number); // 제공되는 숫자
let result = "";

numbers.map(el => {
   cards.has(el) ? result += `1 ` : result += `0 `;
})

console.log(result.trim());