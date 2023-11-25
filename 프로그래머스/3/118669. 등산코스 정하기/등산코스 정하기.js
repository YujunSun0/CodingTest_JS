function solution(n, paths, gates, summits) {
 	// 정점 간선 그래프 만들기
    const graph = new Array(n+1).fill(null).map(_=>[]);
    for(let i = 0 ; i < paths.length ; i++){
        const [a,b,w] = paths[i];
        graph[a].push([w,b]);
        graph[b].push([w,a]);
    }
    
    // 산봉우리에서 나가는 간선 제거
    for(let summit of summits){
        graph[summit] = [];
    }
    
    // 우선순위 큐 (시작은 gates 부터)
    let q = gates;
    
    // intensity 저장 배열
    const dp = new Array(n+1).fill(10000000);
    
    // 시작 위치 마이너스 값으로 초기화
    gates.forEach(v=>dp[v] = 0);
 
 	// bfs 변형
    while(q.length > 0){
        let set = new Set();
        while(q.length > 0){
            const qv = q.pop();
            for(let [w,v] of graph[qv]){
                const maxV = Math.max(dp[qv],w);
                if(dp[v] > maxV){
                    dp[v] = maxV;
                    set.add(v);
                }
            }
        }
        q = [...set];
    }
	
    // 정렬해서 배열의 첫번 째 값 가져오기
    const res = summits.map(v=>[v,dp[v]]).sort((a,b)=>{
        if(a[1] === b[1]){
            return a[0] - b[0];
        }
        return a[1]-b[1];
    })
    return res[0];
}