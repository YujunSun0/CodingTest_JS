function solution(begin, target, words) {
    // dfs(word, cnt, words);
    // words를 순회하며 word.length-1의 수 만큼 같은 스펠링이라면
    // words에서 빼고 dfs(el, cnt + 1, words) 실행
    // target이랑 word가 같을 때 answer 배열에 cnt push
    // cnt 배열에서 최솟값 리턴
    words.sort();
    const dfs = (word, cnt, words) => {
        // base case
        // 변환이 완료되었으면 횟수를 리턴
        console.log(cnt, word, target);
        if(word === target) {
            return cnt;
        }
        // 변환할 수 없는 경우 0 리턴 (target이 없을 때)
        if(words.indexOf(target) === -1) {
            return 0;
        }
        
        let nextWord = "";
        // 변환 가능한 단어 찾기
        for(let i=0; i<words.length; i++) {
            const prev = word.split("");
            const next = words[i].split("");
            // 같은 위치의 같은 스펠링이 아닌 것만 반환 => 길이가 1이면 변경 가능
            if(prev.filter((el,idx) => el !== next[idx]).length === 1) {
                const idx = words.indexOf(words[i]);
                const spliceWord = words.splice(idx,1);
                nextWord += spliceWord;
                break;
            }
        }
        // 만약 반복문을 돌아서 nextWord가 빈 문자열이면 0 반환
        if(nextWord.length === 0) return 0;
    
        // 아니면 dfs 실행
        console.log(nextWord, cnt + 1, words);
        const result = dfs(nextWord, cnt + 1, words);
        return result;
    }
    const answer = dfs(begin, 0, words);
    return answer;
}