const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
let result = "";
let cnt = 0;
for(let i=1; i<=N; i++){
  let [T, ...testCase] = input[i].split(" ").map(Number);
    for(let j=0; j<20; j++){
        for(let k=0; k<j; k++){
            if(testCase[j] < testCase[k]) cnt++;
        }
    }
    result += `${T} ${cnt}\n`;
    cnt = 0;
}
console.log(result);