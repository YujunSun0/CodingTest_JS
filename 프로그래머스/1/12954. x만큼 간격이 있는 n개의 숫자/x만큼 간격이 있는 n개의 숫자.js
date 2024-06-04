function solution(x, n) {
    const arr = [];
    let init = x;
    
    for(let i=0; i<n; i++){
        arr.push(init);
        init += x;
    }
    
    return arr;
}