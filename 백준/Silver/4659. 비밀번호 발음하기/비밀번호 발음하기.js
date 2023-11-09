// 비밀번호가 3자 미만이면 1,3번만 확인 , 3자 이상이면 2번도 확인
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let idx = 0;
const vowel = ["a","e","i","o","u"];
let result = "";

const regex1 = /[aeiouAEIOU]/;
const regex2 = /([aeiouAEIOU]{3,}|[^aeiouAEIOU]{3,})/; // 영어 자음, 모음이 3개이상 연속으로 오면 true 반환
const regex3 = /([^eoEO])\1/; // ee와 oo를 제외하고 같은 글자가 연속으로 두번오면 true 반환


while(true){
    let password = input[idx];
    if(password === "end") break;

    regex1.test(password) && !regex2.test(password) && !regex3.test(password) ? result += `<${password}> is acceptable.\n` : result += `<${password}> is not acceptable.\n`;
    idx++;
}

console.log(result.trim())