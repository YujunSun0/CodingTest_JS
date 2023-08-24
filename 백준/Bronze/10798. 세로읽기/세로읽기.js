const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const length = Math.max(...input.map(el=>el.length));
let result = "";

for(i=0; i<=length-1; i++){
    for(j=0; j<=4; j++){
        if(input[j][i] !== undefined){
           result += input[j][i]
           }
    }
}

console.log(result);