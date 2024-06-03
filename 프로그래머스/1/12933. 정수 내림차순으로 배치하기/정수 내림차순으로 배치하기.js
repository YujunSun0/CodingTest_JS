function solution(n) {
    const arr = String(n).split("").map(Number);
    
    return Number(arr.sort((a,b) => b-a).join(""));
}