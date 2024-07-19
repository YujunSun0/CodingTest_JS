function solution(array) {
    const sorted = array.sort((a,b) => a-b);
    const mid = sorted[Math.floor(array.length / 2)]
    
    return mid;
}