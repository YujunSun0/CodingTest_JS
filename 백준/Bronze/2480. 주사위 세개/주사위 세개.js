const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [a,b,c] = [input[0],input[1],input[2]];
// 같은 눈이 3개일 때, 리턴, ... 1개일 때, 리턴

if(a === b && b === c){
    return console.log(10000+(a*1000));
} if(a === b || b === c){
    return console.log(1000+(b*100));
}  if(a === c) {
  return console.log(1000+(a*100));
}  
    return console.log(Math.max(a,b,c)*100);
