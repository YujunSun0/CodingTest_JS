const [H,W,N,M] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
let seat = 0;
// 가로는 H / N+1 , 세로는 W / M+1
seat += Math.ceil(H/(N+1));
seat *= Math.ceil(W/(M+1));

console.log(seat);