const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const A = input[1].split(' ').map(v=>+v); // 탐색 대상
const B = input[3].split(' ').map(v=>+v);
let answer = [];
A.sort((a,b) => a - b); // 탐색대상을 정렬
B.forEach(v => {
    let start = 0; // 탐색대상의 처음
    let end = A.length - 1;  // 탐색대상의 끝
    let res = false;
    while (start <= end) {
        let mid = parseInt((start + end) / 2); // 탐색대상의 시작과 끝의 중간값
        if (v < A[mid]) { // B배열의 요소가 탐색 대상의 중간값보다 작으면 중간값에 -1을 해서 탐색범위를 반으로 줄임
            end = mid - 1; // 
        } else if (v > A[mid]) { // 반대로 크면, 중간값 + 1해서 탐색 범위를 줄여줌
            start = mid + 1;
        } else {
            res = true;
            break;
        }
    }
    if (res === true) {
        answer.push(1);
    } else {
        answer.push(0);
    }
})
console.log(answer.join('\n'));
