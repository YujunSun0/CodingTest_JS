function solution(a, b) {
    const n = a.length;
    let answer = 0;
    
    for(let i=0; i<n; i++) {
        answer += a[i] * b[i];
    }
    
    return answer;
}