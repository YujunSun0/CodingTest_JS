function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (idx, sum) => {
        // base case
        if(idx === numbers.length) {
            if(sum === target) answer++;
            return; // 종료 조건
        }
        
        // 더하는 경우랑 뺴는 경우
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }
    
    dfs(0,0);
    
    return answer;
}