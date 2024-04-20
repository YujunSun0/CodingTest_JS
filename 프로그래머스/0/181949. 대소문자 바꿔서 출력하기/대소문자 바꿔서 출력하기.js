const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const arr = str.split("");
    let answer = "";
    arr.forEach(el => {
        // 유니코드 값이 65 ~ 90 대문자 / 91 이상 소문자
        el.charCodeAt() < 91 ? answer += el.toLowerCase() : answer += el.toUpperCase()
    })
    console.log(answer);
});