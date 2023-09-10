const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

const result = (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);

console.log(`${result}\n${3}`);
