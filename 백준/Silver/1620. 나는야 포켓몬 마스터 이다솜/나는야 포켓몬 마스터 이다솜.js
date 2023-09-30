const pokedex = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M] = pokedex.splice(0,1)[0].split(" ").map(Number);
const questions = pokedex.splice(N);
//해쉬테이블 이용
let map = new Map();
pokedex.map((el,idx) => map.set(el,idx));

questions.map(el => {
  !isNaN(el) ? console.log(pokedex[+el - 1]) : console.log(map.get(el) + 1)
})
