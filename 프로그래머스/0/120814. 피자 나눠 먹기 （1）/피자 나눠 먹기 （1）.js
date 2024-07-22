function solution(n) {
    // n을 7로 나눴을 때, 나머지가 있다면 피자 한 판이 더 필요함.
    let answer = 0;
    answer += Math.floor(n / 7);
    answer += n % 7 === 0 ? 0 : 1;
    return answer;
}