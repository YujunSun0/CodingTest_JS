function solution(x) {
    const digit = String(x).split("").map(Number).reduce((acc,cur) => acc + cur);
    
    return x % digit === 0 ? true : false;
}