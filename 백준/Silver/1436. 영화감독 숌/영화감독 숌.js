let N = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let start = 666;


    while(true){
       if(start.toString().includes("666")){
           N -= 1;
           if(N === 0) break;
       }
       start++;
    }

console.log(start);