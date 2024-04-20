const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    // \를 하나 출력하려면 2개를 붙여 입력해야함
    console.log(`!@#$%^&*(\\'"<>?:;`)
});