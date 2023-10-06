const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const cards = input.shift().split(" ").map(Number);
const M = input.shift();
const integer = input[0].split(" ").map(Number);
let result = [];

let map = new Map();
cards.forEach((el) => {
    if (map.has(el)) { map.set(el, map.get(el) + 1) } else { map.set(el, 1) }
})

integer.forEach((el) => {
    if (map.has(el)) { result.push(map.get(el)) } else { result.push(0) }
})

console.log(result.join(" "));