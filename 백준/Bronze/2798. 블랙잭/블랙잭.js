const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);
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
