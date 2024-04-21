function solution(babbling) {
    let answer = 0;
    babbling.forEach(el => {
        let idx = 0;
        let isPronunciation = true;
        while(idx < el.length && isPronunciation){
            let spell = el.slice(idx, idx+3);
            if(spell === "aya" || spell === "woo") {
                idx += 3;
            } else {
                spell = el.slice(idx, idx+2);
                if(spell === "ye" || spell == "ma") {
                    idx += 2;
                } else {
                    // 발음이 되지 않는 문자열이 있다면
                    isPronunciation = false;
                }
            }  
        }
        if(isPronunciation) answer++;
    })
    return answer;
}