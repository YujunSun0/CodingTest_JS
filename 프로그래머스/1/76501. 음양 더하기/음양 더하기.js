function solution(absolutes, signs) {
    let sum = 0;
    
    absolutes.forEach((el,idx) => {
        signs[idx] === true ? sum += el : sum -= el;
    })
    
    return sum;
}