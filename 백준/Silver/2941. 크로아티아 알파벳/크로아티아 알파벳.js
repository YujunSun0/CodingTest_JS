const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `c=c=`
)
  .trim()
  .split("");

let croatiaWordCount = 0;

for (let i = 0; i < input.length; i++) {
  let nowWord = input[i];
  let rightWord = input[i + 1];
  let liftWord = input[i - 1];
  let rrWord = input[i + 2];

  if (nowWord === "c") {
    if (rightWord === "=" || rightWord === "-") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "d") {
    if (rightWord === "-") {
      croatiaWordCount--;
    }
    if (rightWord === "z" && rrWord === "=") {
      croatiaWordCount -= 2;
    }
  }

  if (nowWord === "l" || nowWord === "n") {
    if (rightWord === "j") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "s") {
    if (rightWord === "=") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "z") {
    if (liftWord !== "d" && rightWord === "=") {
      croatiaWordCount--;
    }
  }

  croatiaWordCount++;
}



console.log(croatiaWordCount);