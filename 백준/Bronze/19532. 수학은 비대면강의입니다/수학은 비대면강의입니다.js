const [a,b,c,d,e,f] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const x = (b * f - e * c) / (b * d - e * a);
const y = (a * f - d * c) / (a * e - d * b);

console.log(`${x} ${y}`)