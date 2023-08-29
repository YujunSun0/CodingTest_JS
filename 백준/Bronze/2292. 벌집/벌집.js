// 1 7 19 37 61
// 1 => 1번, 2~7 => 2번, 8~19 => 3번, 20~37 => 4번 ...
// 숫자 사이의 간격은 6의 배수
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

let start = 2;
let end = 7; 
let count = 2;
// while은 조건식이 false일 때 빠져나감. 작성해야 할 코드는 start와 end 사이에 N이라는 숫자가 있으면 빠져나가는 것
if(N !== 1){
    while(!(N >= start && N <= end)){
    start += 6 * (count-1);
    count++;
    end += 6 * (count-1);
    } 
} else {
    count--;
}

console.log(count);
