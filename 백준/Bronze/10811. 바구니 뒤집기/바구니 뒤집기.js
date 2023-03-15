const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(el => +el);
let basket = [];
for(let i=1; i<=N; i++){
    basket.push(i);
};

for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(el => +el);
    let arr = [];
    for(let j=a-1; j<b; j++){
        arr.push(basket[j])
    };
    arr.reverse();
    basket.splice(a-1, b-a+1, ...arr);
}
console.log(basket.join(' '))