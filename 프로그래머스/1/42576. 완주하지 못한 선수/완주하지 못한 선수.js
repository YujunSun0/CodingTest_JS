function solution(participant, completion) {
    let answer;
    let hashMap = new Map()

    participant.forEach(e => {
        if(hashMap.has(e)) {
            hashMap.set(e, hashMap.get(e)+1)  
            // Map(3) { 'mislav' => 2, 'stanko' => 1, 'ana' => 1 }
        } else {
            hashMap.set(e, 1)    
        }
    })

    completion.forEach(e => {
        if(hashMap.has(e)) {
            hashMap.set(e, hashMap.get(e)-1) 
            // Map(3) { 'mislav' => 1, 'stanko' => 0, 'ana' => 0 }
        }
    })

    for(let [key, value] of hashMap) {
        if(value == 1) {
            answer = key
        }
    }

    return answer;
}