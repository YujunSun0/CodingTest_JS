function solution(n) {
    let answer = "";
    let cnt = 0;
    
    while(n > 0) {
        cnt % 2 === 0 ? answer += "수" : answer += "박";
        cnt++;
        n--;
    }
    return answer;
}