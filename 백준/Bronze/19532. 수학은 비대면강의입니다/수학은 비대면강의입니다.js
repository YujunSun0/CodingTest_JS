const [a,b,c,d,e,f] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let [x,y] = [0,0];

for(let i=-999; i<=999; i++){
    for(let j=-999; j<=999; j++){
        if((a*i)+(b*j) === c && (d*i)+(e*j) === f){
         x += i;
         y += j;   
        }
    }
}

console.log(`${x} ${y}`)