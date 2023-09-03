const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

for(let i=0; i<input.length -1; i++){
    let num = input[i];
    let result = [];
    let index = 1;
    while (index <= Math.sqrt(num)) {
      if (num % index === 0) {
        result.push(index)
        if (num / index !== index) result.push(num / index)
      }
      index++
    }
    result.sort((a, b) => a - b)

    let count = result.slice(0,result.length-1);

    count.reduce((acc,cur) => acc + cur) !== num ? console.log(`${num} is NOT perfect.`) : console.log(`${num} = ${count.join(" + ")}`)
}