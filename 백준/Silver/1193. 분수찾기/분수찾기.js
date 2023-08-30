const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let X = Number(input);
let group = 0;

const even = [];
const odd = [];

while(X > 0){ 
  group++; 
  X -= group;
}

for(let i=0; i < group; i++){
  even.push(i+1);
  odd.push(group-i);
}

if(group % 2 === 0){
  console.log(`${even[X+group-1]}/${odd[X+group-1]}`)
} else {
  console.log(`${odd[X+group-1]}/${even[X+group-1]}`)
}
