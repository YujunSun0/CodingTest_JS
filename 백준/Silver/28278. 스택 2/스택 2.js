const [N,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const stack = [];
let results = "";

for (let i = 0; i < arr.length; i++) {
  let query = arr[i];
  let [cmd, value] = query.split(" ");

  switch (cmd) {
    case "1":
      stack.push(parseInt(value));
      break;
    case "2":
      if (stack.length > 0) {
        results += `${stack.pop()}\n`;
      } else {
        results += `-1\n`;
      }
      break;
    case "3":
      results += `${stack.length}\n`;
      break;
    case "4":
      results += stack.length === 0 ? `1\n` : `0\n`;
      break;
    case "5":
      if (stack.length > 0) {
        results += `${stack[stack.length - 1]}\n`;
      } else {
        results += `-1\n`
      }
      break;
    default:
      break;
  }
}

console.log(results);