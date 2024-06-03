function solution(n) {
    let answer = 0;
    
    for(let i=1; i<=n; i++) {
        // 나누어 떨어진다면
        if(n % i === 0) {
            answer += i;        
        }
    }
    
    return answer;
}