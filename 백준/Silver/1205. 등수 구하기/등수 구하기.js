const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, score, P] = input[0].split(" ").map(Number);

if(N === 0){
    console.log(1);
} else {
    const rankingList = input[1].split(" ").map(Number);
    if(N === P && rankingList[rankingList.length-1] >= score){
        console.log(-1);
    } else {
        let rank = -1;
        for(let idx in rankingList){
            if(rankingList[idx] <= score){
                rank = `${+idx+1}`;
                break;
            }
        }
        if(rank === -1) console.log(N+1); // 랭킹 리스트를 모두 순회한 후에도 등수를 찾지 못한 경우
        else console.log(rank);
    }
}
