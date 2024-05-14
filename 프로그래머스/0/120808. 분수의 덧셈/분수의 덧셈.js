function solution(numer1, denom1, numer2, denom2) {
    // 분모의 최소공배수를 구한 뒤 진행
    const lcm = getLCM(denom1, denom2);
    const numerator = (lcm / denom1 * numer1) + (lcm / denom2 * numer2);
    
    // 분자와 분모의 최대공약수를 구하여 분수를 간단히 함
    const gcd = getGCD(numerator, lcm);
    
    console.log(numerator/gcd, lcm/gcd);
    return [numerator/gcd, lcm/gcd];
}

// 최대공약수 구하기
const getGCD = (num1, num2) => {
    while(num2 !== 0){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

// 최소공배수 구하기
const getLCM = (num1, num2) => {
    return (num1 * num2) / getGCD(num1, num2);
}
