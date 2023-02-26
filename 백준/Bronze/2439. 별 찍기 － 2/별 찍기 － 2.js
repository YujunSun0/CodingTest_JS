const input = require("fs").readFileSync("/dev/stdin").toString();

let result = '';
let blank = '';

for(let i=1; i<= +input; i++){
    result += "*";
     for(let j=0; j< +input-i; j++){
         blank += " ";
     }
    console.log(blank + result);
    blank = "";
}