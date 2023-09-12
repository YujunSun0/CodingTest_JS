const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const stringToNumber = (str) => {
    return str.split(" ").map(Number);
}

const [N,M] = stringToNumber(input[0]);
const cards = stringToNumber(input[1]);
let max = 0;

while(cards.length >= 3 && max !== M){
    for(let i=1; i<cards.length-1; i++){
     for(let j=i+1; j<cards.length; j++){
      let sum = cards[0] + cards[i] + cards[j];
      if(sum > max && sum <= M) max = sum;
      }   
     }
      cards.shift();
}

console.log(max);
