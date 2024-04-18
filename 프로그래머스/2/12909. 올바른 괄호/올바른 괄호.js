function solution(s) {
    const stack = [];
    const ArrayToS = s.split("");
    let answer = true;
    
    // 여는 괄호만 스택에 저장 -> 닫는 괄호를 만나면 스택에서 하나씩 제거
    ArrayToS.forEach(str => {
        // pop : O(1), shift : O(n)
        if(str === "("){
            stack.push(str)
        } else {
            stack.length > 0 ? stack.pop() : answer = false;
        }
    })
    
    return answer && stack.length === 0;
}