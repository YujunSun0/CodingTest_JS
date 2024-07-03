function solution(price, money, count) {
    let totalPrice = 0;
    let currentPrice = price;
    
    for(let i=1; i<=count; i++) {
        totalPrice += currentPrice;
        currentPrice += price;
    }
    
    const answer = totalPrice - money;
    return answer > 0 ? answer : 0
}