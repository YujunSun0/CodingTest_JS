const input = require("fs").readFileSync("/dev/stdin").toString();
let str = "";

for(let i=1; i<= +input/4; i++){
    str += "long ";
}

console.log(`${str}int`);