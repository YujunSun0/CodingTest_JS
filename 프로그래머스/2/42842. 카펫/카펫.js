function solution(brown, yellow) {
    let answer = [];
    // brown은 8 이상 -> 가로, 세로 길이가 최소 3
    for (let y = 3; y <= (brown+yellow)/y; y++) {
        let x = Math.floor((brown+yellow)/y);
        if((x-2)*(y-2)=== yellow) {
            answer[0] = x;
            answer[1] = y;
            break;
        }
    }
 
    return answer; 
}