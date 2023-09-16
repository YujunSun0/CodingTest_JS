const [N,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

arr.map(el => +el).sort((a,b) => a-b).forEach(el => console.log(el));