const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];
let M = 0;

input.forEach((i) => {
    i = i.split(' ').map(a=>Number(a));
    M = i.length;
    arr.push(...i);
});

const max = Math.max(...arr);
const index = arr.indexOf(max);
console.log(max)
console.log(Math.floor(index/M) +1 , index%M +1);