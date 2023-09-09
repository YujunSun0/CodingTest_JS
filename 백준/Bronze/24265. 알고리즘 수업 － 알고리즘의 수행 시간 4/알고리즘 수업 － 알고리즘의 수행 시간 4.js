const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

console.log(`${n*(n-1)/2}\n2`);