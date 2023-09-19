const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let result = arr.map(el => el.split(" ").map(Number)).sort((a,b) => {
    if(a[0] === b[0]){
        return a[1] - b[1];
    } else{
        return a[0] - b[0];
    }
});

console.log(result.map(el => el.join(" ")).join("\n"));
