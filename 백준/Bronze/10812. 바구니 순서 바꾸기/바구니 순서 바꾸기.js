const fs = require("fs");

const [NnM, ...exes] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = NnM.split(" ").map((e) => +e);
let baskets = new Array(n).fill(0).map((v, i) => i + 1);

const execute = (str) => {
  const [i, j, k] = str.split(" ").map((e) => +e - 1);
  const tempBaskets = [...baskets];

  baskets = tempBaskets
    .slice(0, i)
    .concat(tempBaskets.slice(k, j + 1).concat(tempBaskets.slice(i, k)))
    .concat(tempBaskets.slice(j + 1, tempBaskets.length));
};

exes.forEach(execute);
console.log(baskets.join(' '));