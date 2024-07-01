function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    
    numbers.forEach(el => {
        const idx = arr.indexOf(el);
        arr.splice(idx,1);
    })
    
    return arr.reduce((acc,cur) => acc + cur);
}