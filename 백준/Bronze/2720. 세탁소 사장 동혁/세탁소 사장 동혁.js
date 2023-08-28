const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
// quarter === 25 , dime === 10, nickel === 5, penny === 1
const arr = [25,10,5,1];

for(let i=1; i<=N; i++){
   let change = +input[i]; 
   let answer = [0,0,0,0];
    for(j=0; j<=3; j++){
        let quotient = Math.floor(change / arr[j]);
        answer[j] += quotient;
        if(quotient !== 0){
        change %= arr[j]
        }
    }   
    console.log(`${answer[0]} ${answer[1]} ${answer[2]} ${answer[3]}`);
}