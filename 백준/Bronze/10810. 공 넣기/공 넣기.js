const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(el => +el);
let arr = new Array(N);

for(let i = 1; i <= M; i++ ){
   let [start,end,k] = input[i].split(" ").map(el => +el);
    for(start; start <= end; start++){
        arr[start-1] = k;
    } // 이제 배열의 비어있는 공간에 0을 할당해야함
}

for(let j=0; j<arr.length; j++){
    typeof arr[j] === "undefined" ? arr[j] = 0 : arr[j]
}

console.log(arr.join(" "));