//서브태스크 1번
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// N = 도시의 개수(숫자), distance = 각 도시 사이의 거리(배열), price = 각 도시의 기름값(배열)
const [N, distance, price] = [+input[0], input[1].split(" ").map(el=>+el), input[2].split(" ").map(el=>+el)];
price.splice(N-1,N); // 마지막 도시는 계산에서 제외해야함

let result = 0;
let nowPrice = price[0];

for(let i=0; i<distance.length; i++){
    result += nowPrice * distance[i];

    if(nowPrice > price[i+1]){
        nowPrice = price[i+1];
    }
}

console.log(result)