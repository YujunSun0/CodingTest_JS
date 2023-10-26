let input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();

for (let i = 0; i < +N; i++) {
  const cases = input[i];
  const stack =  [];
  let result = 'YES';

  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === '(') {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      } 
    }
  }

  if (stack.length !== 0) {
    result = 'NO';
  }

  console.log(result);
}