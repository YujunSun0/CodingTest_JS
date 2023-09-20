const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let result = arr.map(el => el.split(" ").map(Number)).sort((a,b) => {
    if(a[1] === b[1]){
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});

console.log(result.map(el => el.join(" ")).join("\n"));