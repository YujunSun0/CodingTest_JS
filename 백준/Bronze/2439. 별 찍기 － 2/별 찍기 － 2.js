const input = require("fs").readFileSync("/dev/stdin").toString();

for(let i=1; i<= +input; i++){
    console.log(" ".repeat(+input-i) + "*".repeat(i));
}