console.log(require("fs")
.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")
.slice(1)
.map(el => +el).sort((a,b) => a-b).join("\n"));