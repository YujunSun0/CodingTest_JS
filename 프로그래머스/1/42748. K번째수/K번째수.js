function solution(array, commands) {
    // idx 관점에서 바라보면 i-1 ~ j 까지 slice <- 원본 배열을 해치지 않으면서 진행
    // return값을 sort하여 k번째 요소 출력
    const answer = [];
    commands.forEach(el => {
        const [i,j,k] = el;
        const sliceArr = array.slice(i-1,j);
        sliceArr.sort((a,b) => a-b);
        answer.push(sliceArr[k - 1]);
    })
    return answer;
}