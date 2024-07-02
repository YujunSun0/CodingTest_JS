function solution(arr, divisor) {
    const filteredArr = arr.filter(el => el % divisor === 0);
    
    return filteredArr.length === 0 ? [-1] : filteredArr.sort((a,b) => a-b);
}