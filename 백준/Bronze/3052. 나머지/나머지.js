const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => +el);
const arr = [];

for(let i = 0; i < input.length; i++){
   let num = input[i] % 42;
   if(arr.indexOf(num) === -1) arr.push(num); // indexOf의 값이 -1이 나오면 아직 num이 배열에 없다는 뜻
}
//반복문을 돌면 중복된 나머지는 배열에 추가되지 않은 상태임 => 배열의 길이를 출력
return console.log(arr.length);