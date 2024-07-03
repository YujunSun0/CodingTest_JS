function solution(left, right) {
    let answer = 0;
    
    for(let i=left; i<=right; i++) {
        const arr = [];
        for(let j=1; j<=i; j++) {
            // i의 약수를 구하는 반복문
            if(i % j === 0) arr.push(j);
        }
        // 약수의 개수가 짝수라면 더하고 홀수라면 뺀다
        arr.length % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}