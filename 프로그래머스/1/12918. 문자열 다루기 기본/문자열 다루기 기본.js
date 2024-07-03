function solution(s) {
    const arr = s.split("");
    let answer = true;
    
    // NaN이라면 자료형이 string 이였던 것
    arr.map(Number).forEach(el => {
         if(isNaN(el)) answer = false;
    })
    
    // 길이가 4 혹은 6인지 확인 (4도 아니고 6도 아니라면 false)
    if(arr.length !== 4 && arr.length !== 6) {
        answer = false;
    }
    
    return answer;
}