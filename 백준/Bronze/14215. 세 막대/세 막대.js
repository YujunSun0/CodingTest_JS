let [a,b,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((a,b) => a-b);

while(a+b <= c){
    c--;
}

console.log(a+b+c);