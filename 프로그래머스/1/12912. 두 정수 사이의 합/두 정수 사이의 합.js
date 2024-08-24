function solution(a, b) {
    let answer = 0;
    if(a > b){
        let change = b;
        b = a;
        a = change;
    }
    for(let i=a; i<=b; i++) {
        answer += i;
    }
    return answer;
}