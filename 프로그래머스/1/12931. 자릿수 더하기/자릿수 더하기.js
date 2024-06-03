function solution(n) {
    const arr = String(n).split("").map(Number);   
    return arr.reduce((acc,cur) => acc + cur);
}