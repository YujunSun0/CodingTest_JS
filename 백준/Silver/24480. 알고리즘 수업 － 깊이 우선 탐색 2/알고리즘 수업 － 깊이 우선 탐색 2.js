const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M,R] = input.shift().split(" ").map(Number);
const arr = input.map(el => el.split(" ").map(Number));
const visited = Array(N).fill(0);
const graph = [...Array(N+1)].map(() => []);
let cnt = 1;

arr.forEach(([from,to]) => {
    graph[from].push(to);
    graph[to].push(from);
})

// 내림차순 정렬
graph.forEach(el => el.sort((a,b) => b-a));

const dfs = (node) => {
    // 방문하지 않은 노드라면
    if(!visited[node - 1]){
        visited[node - 1] = cnt;
        cnt++;
        for(const adjace of graph[node]) dfs(adjace);
    }
}

dfs(R);

console.log(visited.join("\n"));