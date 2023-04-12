
const input = require("fs").readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let result = []
  for(let i = 1; i<input; i++){
    let side = " ".repeat(input-i)
    let middle = '*'.repeat(i*2-1)
    result.push( side + middle )
  }
  for(let i = input; i>=1; i--){
    let side = " ".repeat(input-i)
    let middle = '*'.repeat(i*2-1)
    result.push( side + middle )
  }
  return result.join('\n')
}

console.log(solution(input))