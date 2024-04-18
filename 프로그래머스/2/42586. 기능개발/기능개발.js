function solution(progresses, speeds) {
    const answer = [];
    
    while(speeds.length > 0){
        let count = 0;
        // 1일 작업 진행
        progresses.forEach((per, idx) => {
            if(per < 100) progresses[idx] += speeds[idx];
        })
        // 첫 번째 기능이 완료되었을 때
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;   
        }
        if(count > 0) {
            answer.push(count);
        }
    }
    return answer;
}