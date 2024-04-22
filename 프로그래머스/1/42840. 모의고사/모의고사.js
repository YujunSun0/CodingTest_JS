function solution(answers) {
    // 1번 : 12345 / 2번 : 21232425 / 3번 : 3311224455
    const [f, s, t] = ["12345", "21232425", "3311224455"];
    const answer = [0,0,0];
    let [fIdx,sIdx,tIdx] = [0,0,0];
    answers.forEach(el => {
        const answerToString = String(el);
        if(f[fIdx] === answerToString) answer[0]++;
        if(s[sIdx] === answerToString) answer[1]++;
        if(t[tIdx] === answerToString) answer[2]++;
        
        fIdx === f.length - 1 ? fIdx = 0 : fIdx++;
        sIdx === s.length - 1 ? sIdx = 0 : sIdx++;
        tIdx === t.length - 1 ? tIdx = 0 : tIdx++;
    })
    const maxScore = Math.max(...answer);
    return answer.map((score, idx) => score === maxScore ? idx + 1 : 0)
        .filter(num => num !== 0)
        .sort((a, b) => a - b);
}