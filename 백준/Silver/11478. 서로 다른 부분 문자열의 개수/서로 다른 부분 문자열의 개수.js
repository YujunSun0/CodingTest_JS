const S = require("fs").readFileSync("/dev/stdin").toString().trim();
let set = new Set();

for (let i = 1; i <= S.length; i++) {
  for (let j = 0; j + i <= S.length; j++) {
    set.add(S.substring(j, j + i));
  }
}
console.log(set.size);