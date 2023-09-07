const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i=0; i<input.length-1; i++){
    let [a,b,c] = input[i].split(" ").map(Number).sort((a,b) => a-b);
    if(a + b <= c){
        console.log("Invalid")
    } else if(a===b && b===c){
        console.log("Equilateral")
    } else if(a===b || b===c || a===c){
        console.log("Isosceles")
    } else {
        console.log("Scalene")
    }
}