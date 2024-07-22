function solution(n) {
    const oddFunc = (num) => {
        return num % 2 === 1 ? true : false;
    }
    const answer = [];
    
    for(let i=1; i<=n; i++) {
        if(oddFunc(i)) answer.push(i);
    }
    
    return answer;
}