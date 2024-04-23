function solution(triangle) {
    const dp = triangle.slice();
    // 맨 아래의 윗 구역부터 0까지
    for(let i=triangle.length - 2; i>=0; i--) {
        // 0 1, 1 2, 2 3... i i+1
        for(let j=0; j<=i; j++) {
            dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1]);
        }
    }
    // 맨 위의 값이 합의 최댓값
    return dp[0][0];
}