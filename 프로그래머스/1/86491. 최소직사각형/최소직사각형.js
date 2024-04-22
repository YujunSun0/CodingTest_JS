function solution(sizes) {
    // 회전이 가능하다 => x <-> y가 가능하며 x에 큰값, y에 작은값을 넣어 각각 max를 리턴
    const answer = sizes.map(size => {
        return size.sort((a,b) => b-a);
    })
    let [x,y] = [answer[0][0],answer[0][1]];
    for(let i=0; i<answer.length - 1; i++){
        if(answer[i+1][0] > x) x = answer[i+1][0];
        if(answer[i+1][1] > y) y = answer[i+1][1];
    }
    return x * y;
}