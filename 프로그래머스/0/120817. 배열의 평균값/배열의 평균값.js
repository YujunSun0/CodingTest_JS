function solution(numbers) {
    const length = numbers.length;
    const sum = numbers.reduce((acc,cur) => acc + cur);
    
    return sum / length;
}