const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];

for(let i=1; i<=N ; i++){
    const str = input[i]
    console.log(str[0] + str[str.length - 1]);
}