const fs = require('fs');

const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

if(x > 0) y > 0 ? console.log(1) : console.log(4)
if(x < 0) y > 0 ? console.log(2) : console.log(3)