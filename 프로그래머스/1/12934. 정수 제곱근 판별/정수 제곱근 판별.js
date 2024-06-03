function solution(n) {
    let x = 0;
    const sqrt = Math.sqrt(n);
    
    if(sqrt % 1 === 0) {
        x = sqrt + 1;
    } else {
        x = -1;
    }
    
    return x === -1 ? -1 : x ** 2;
}