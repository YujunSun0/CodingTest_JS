const solution = (alp, cop, problems) => {
    const MAX_INT = 2147483647; // 2^31 - 1
    let alpMax = 0;
    let copMax = 0;
     for (let i=0; i<problems.length; i++) {
        if (problems[i][0] > alpMax) alpMax = problems[i][0];
        if (problems[i][1] > copMax) copMax = problems[i][1];
    }
    
    // 주어진 범위에서 벗어나지 않게 함
    if (alp > alpMax) alp = alpMax;
    if (cop > copMax) cop = copMax;
    
    // dp 배열 초기화 - JS에서 수의 최대크기인 2^31 - 1로 초기화함
    const dp = Array.from({length:151}, () => Array(151).fill(MAX_INT));
    dp[alp][cop] = 0;
    
    // dp 알고리즘 핵심 부분
    for (let i=alp; i<=alpMax; i++) {
        for (let j=cop; j<=copMax; j++) {
            if (i == alpMax && j == copMax) break;
            
            // 1. 알고리즘 공부하기 -> 1을 높이기 위해서 1의 시간이 필요
            if (i < alpMax) {
                dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+1);
            }
            
            // 2. 코딩 공부하기 -> 1을 높이기 위해서 1의 시간이 필요
            if (j < copMax) {
                dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+1);    
            }
            
            // 3. 문제 풀기 -> 각 문제마다 문제를 풀면 올라가는 알고력과 코딩력이 정해져 있음 (같은 문제 여러 번 가능)
            for (let k=0; k<problems.length; k++) {
                const [alpReq, copReq, alpRwd, copRwd, cost] = problems[k];
                
                // 현재 풀 수 있는 문제만 풀 수 있기 때문에 아래의 if 조건문 추가
                if (i >= alpReq && j >= copReq) {
                    const alpSum = i + alpRwd;
                    const copSum = j + copRwd;
                    
                    if (alpSum >= alpMax && copSum >= copMax) {
                        dp[alpMax][copMax] = Math.min(dp[alpMax][copMax], dp[i][j] + cost);
                    }
                    else if (alpSum >= alpMax) {
                        dp[alpMax][j+copRwd] = Math.min(dp[alpMax][j+copRwd], dp[i][j] + cost);
                    }
                    else if (copSum >= copMax) {
                        dp[i+alpRwd][copMax] = Math.min(dp[i+alpRwd][copMax], dp[i][j] + cost);
                    }
                    else {
                        dp[i+alpRwd][j+copRwd] = Math.min(dp[i+alpRwd][j+copRwd], dp[i][j] + cost);
                    }
                }
            }
        }
    }
    
    return dp[alpMax][copMax];
}