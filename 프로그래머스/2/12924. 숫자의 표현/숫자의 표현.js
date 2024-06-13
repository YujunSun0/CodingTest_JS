// 규칙 -> 주어진 자연수의 약수 중 홀수의 개수와 같음
function solution(n) {
  let answer = 0;
  
  for(let i = 0; i <= n; i++) {
  	if(n%i === 0 && i%2 === 1) answer++;
  }
  
  return answer;
}