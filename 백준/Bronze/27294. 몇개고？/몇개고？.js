var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

let result;

if((a >=12 && a<=16) && b === 0){
     result = 320
} else {
    result = 280
}

console.log(result)