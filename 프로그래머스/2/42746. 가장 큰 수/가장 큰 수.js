function solution(numbers) {
    // 내림차순 정렬
    numbers.sort((a,b) => {
        // 비교 대상의 앞자리만 가져와 할당
        const left = String(a);
        const right = String(b);
        // 앞자리가 같다면 둘의 합을 비교(string + string), 다르면 앞자리만 비교
        if(Number(right[0]) === Number(left[0])){
            return (right+left) - (left+right);    
        } else {
            return Number(right[0]) - Number(left[0]);
        }
    });
    return numbers.join("")[0] === "0" ? "0" : numbers.join("") ;
}