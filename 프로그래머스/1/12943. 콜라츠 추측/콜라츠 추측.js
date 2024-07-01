function solution(num) {
    let cnt = 0;
    while(num !== 1) {
        if(num % 2 === 0) {
          num /= 2;      
          cnt++;
        } else {
            num *= 3;
            num++;
            cnt++;
        }
    }
    return cnt >= 500 ? -1 : cnt;
}