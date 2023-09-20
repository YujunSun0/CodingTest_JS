let [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr = [...new Set(arr)];

arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n'); // 단축평가 사용

console.log(arr.join("\n"));