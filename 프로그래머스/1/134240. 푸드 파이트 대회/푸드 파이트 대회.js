function solution(food) {
    let result = "0";
    for(let i = 1; i < food.length; i++) {
        // 홀수가 될 때 까지 반복
        while(food[i] >= 2) {
            const index = result.indexOf("0");
            result = result.slice(0,index) + i + "0" + i + result.slice(index + 1);
            food[i] -= 2;
        }
    }
    return result;
}