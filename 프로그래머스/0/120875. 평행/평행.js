function solution(dots) {
    let answer = 0;
    let inclination = [0,0];
    // x좌표를 기존으로 오름차순 정렬
    dots.sort((a,b) => a[0] - b[0]); 
    inclination[0] = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]);
    inclination[1] = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0]);
    if(inclination[0] === inclination[1]) answer = 1;
    return answer;
}