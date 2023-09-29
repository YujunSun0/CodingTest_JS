let [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr = arr.map(el => el.split(" "));
let set = new Set();

arr.map(el => {
  el[1] === "enter" ? set.add(el[0]) : set.delete(el[0]);
})

console.log([...set].sort().reverse().join("\n"))