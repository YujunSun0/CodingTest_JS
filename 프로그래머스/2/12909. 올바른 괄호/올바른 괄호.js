function solution(s){
    // "("와 ")"가 만나면 제거해준다. 순서를 중요시 해야 함
    const stack = [];
    const stringArray = s.split("");
    let idx = 0;
    
    for(let str of stringArray){
        stack.push(str);
        // str이 ")"일 때, 이전의 str이 "("이면
        if(str === ")" && stack[idx-1] === "(") {
            // 해당하는 인덱스와 이전 인덱스의 요소 삭제
            stack.splice(idx-1, 2);
            idx -= 2;
        }
        idx++
    }
    
    return stack.length === 0 ? true : false;
}