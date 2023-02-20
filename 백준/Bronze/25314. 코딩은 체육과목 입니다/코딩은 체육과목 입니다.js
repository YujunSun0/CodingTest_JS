const input = require("fs").readFileSync("/dev/stdin").toString();

console.log(`${"long ".repeat(+input/4)}int`);