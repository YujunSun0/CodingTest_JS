function solution(d, budget) {
    let result = 0;
    d.sort((a,b) => a-b).forEach(el => {
        if(budget >= el) {
            result++;
            budget -= el;
        }
    })
    return result;
}