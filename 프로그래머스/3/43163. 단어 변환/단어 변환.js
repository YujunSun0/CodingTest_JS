function solution(begin, target, words) {
    words.sort();
    const dfs = (word, cnt, words) => {
        // base case 1: 변환이 완료되었으면 변환 횟수를 반환
        if (word === target) {
            return cnt;
        }

        // base case 2: 목표 단어가 단어 목록에 없는 경우 0을 반환
        if (words.indexOf(target) === -1) {
            return 0;
        }
        
        // base case 3: word에서 target으로 변경이 가능할 때 cnt + 1 반환
        if(isConnected(word,target)) {
            return cnt + 1;
        }
        
        let nextWord = "";
        // 변환 가능한 단어 찾기
        for (let i = 0; i < words.length; i++) {
            // 두 문자열이 교환 가능하다면
            if(isConnected(word,words[i])) {
                const idx = words.indexOf(words[i]);
                const spliceWord = words.splice(idx, 1);
                nextWord = spliceWord[0];
                break;
            }
        }

        // 변환 가능한 단어를 찾지 못한 경우 0을 반환
        if (nextWord.length === 0) {
            return 0;
        }

        // 재귀 호출하여 다음 단어로 변환
        return dfs(nextWord, cnt + 1, words);
    };

    return dfs(begin, 0, words);
}

// 두 문자열 중 다른 스펠링이 하나일 경우 true
const isConnected = (str1, str2) => {
      const prev = str1.split("");
      const next = str2.split("");
        // 같은 위치의 같은 스펠링이 아닌 것만 반환 => 길이가 1이면 변경 가능
      return prev.filter((el, idx) => el !== next[idx]).length === 1 ? true : false;
}