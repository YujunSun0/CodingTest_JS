let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr.shift();
let result = arr.map(el => el.split(" ")).sort((a,b) => Number(a[0]) - Number(b[0])).map(el => el.join(" "));

console.log(result.join("\n"));