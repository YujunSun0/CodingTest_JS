const n = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

console.log(`${n*n*n}\n3`)