let N = parseInt(require("fs").readFileSync("/dev/stdin").toString());
let cnt = 0;

while(true){
    if(N % 5 === 0){
     console.log(N/5 + cnt); 
     break;
    }
    if(N < 0){
     console.log(-1);
     break;
    }
    N-=3;
    cnt++;
}