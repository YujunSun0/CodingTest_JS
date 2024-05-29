function solution(n) {
    let answer = 0;
    const addEvenNum = (num) => {
        // base case
        if(num < 2) return;
        
        if(num % 2 === 0) {
            answer += num;
            addEvenNum(num-1);
        } else {
            addEvenNum(num-1);
        }
    }
    addEvenNum(n);
    
    return answer;
}