const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M,R] = input.splice(0,1)[0].split(" ").map(el => +el);
const arr = input.map(el => el.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);
const visited = Array(N).fill(0); // 방문 횟수를 저장하는 배열
let cnt = 1;

// 무방향(양방향) 그래프
arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

// 오름차순 정렬
graph.map((v) => v.sort((a, b) => a - b));

// DFS
const dfs = (n) => {
  // graph의 0번째 인덱스는 쓰지 않으므로 -1의 방문여부 체크
  if (!visited[n - 1]) {
    // 방문 체크함과 동시에 해당 인덱스의 값은 1씩 증가하는 cnt로 넣어준다.
    visited[n - 1] = cnt;
    cnt++;
    for (const next of graph[n]) dfs(next);
  }
};

dfs(R);

console.log(visited.join('\n'));