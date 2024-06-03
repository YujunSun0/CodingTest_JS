function solution(s){
    const spell = s.toLowerCase();
    const answer = [0,0];
    
    for(let i=0; i < spell.length; i++) {
        if(spell[i] === "p") answer[0]++;
        if(spell[i] === "y") answer[1]++;
    }
    console.log(answer);
    return answer[0] === answer[1];
}