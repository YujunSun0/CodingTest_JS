function solution(arr) {
    const sum = arr.reduce((acc,cur) => acc + cur);
    return sum / arr.length;
}