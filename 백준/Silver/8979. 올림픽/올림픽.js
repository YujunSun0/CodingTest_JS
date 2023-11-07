const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N,K] = input.shift().split(" ").map(Number);
let countryAndMedal = input.map(el => el.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
let answer = 0;
let countryMap = new Map();

for(let i = 0; i < countryAndMedal.length; i++){
    let sum = 0;
    for(let j = 1; j < countryAndMedal[i].length; j++){
        if(j === 1){
            sum += countryAndMedal[i][j] * 3;
        } else if(j === 2){
            sum += countryAndMedal[i][j]  * 2;
        } else if(j === 3){
            sum += countryAndMedal[i][j] * 1;
        }     
    }
    countryMap.set(i+1, sum);
}

let countryMapArr = [...countryMap].sort((a, b) => {
    if(a[1] === b[1]){
        return a[0] - b[0]
    } else{
       return b[1] - a[1]
    }
});

// 등수를 담을 Map 
let rankMap = new Map();


// sort해준후, value가 높은 순부터 반복문을 돌면서 다시 거꾸로 위로 반복문을 돈다.
// 본인보다 value가 높은 key가 존재한다면 rank를 1씩 더해주어서 등수를 업데이트한다.
for(let i = 0; i < countryMapArr.length; i++){
    let rank = 1;
    let memCount = countryMapArr[i][1];
    
    for(let j = i-1; j >= 0; j--){
        
        if(memCount < countryMapArr[j][1]){
            rank++;
        }
        
    }
    
    rankMap.set(countryMapArr[i][0], rank);
    
}

rankMap.forEach((value, key) => key === K ? answer = value : undefined);

console.log(answer);
