const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input.shift());
const arr = input.map(el => el.split(" ").map(Number));
let result = "";

for(let i=0; i<N; i++){
    let select = arr[i];
    let cnt = 0;
    arr.map(el => {
        if(select[0] < el[0] && select[1] < el[1]) cnt++;
    })
    result += `${cnt+1}\n`;
    cnt = 0;
}

console.log(result);