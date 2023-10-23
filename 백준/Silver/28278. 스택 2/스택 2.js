const [N,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const stack = [];
const results = [];

for (let i = 0; i < arr.length; i++) {
  let query = arr[i];
  let [cmd, value] = query.split(" ");

  switch (cmd) {
    case "1":
      stack.push(parseInt(value));
      break;
    case "2":
      if (stack.length > 0) {
        results.push(stack.pop());
      } else {
        results.push(-1);
      }
      break;
    case "3":
      results.push(stack.length);
      break;
    case "4":
      results.push(stack.length === 0 ? 1 : 0);
      break;
    case "5":
      if (stack.length > 0) {
        results.push(stack[stack.length - 1]);
      } else {
        results.push(-1);
      }
      break;
    default:
      break;
  }
}

console.log(results.join("\n"));