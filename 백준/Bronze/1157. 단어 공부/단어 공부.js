const input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();
const arr = new Array(26).fill(0);

//해당 문자의 인덱스를 찾아서 더해준다
for(let i=0; i<input.length; i++){
    arr[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...arr);
const idx = arr.indexOf(max);

let same = false;

for(let j=0; j< 26; j++){
    if(arr[j] === max && idx !== j){
        same = true;
        break;
    }
}

console.log(same ? "?" : String.fromCharCode(idx + 65));



