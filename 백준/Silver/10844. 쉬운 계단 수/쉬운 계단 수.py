import sys

n = int(sys.stdin.readline())

# DP 테이블 초기화
dp = [[0] * 10 for _ in range(n+1)]

# 1의 자릿수의 경우의 수 초기화
for i in range(1, 10):
    dp[1][i] = 1

# 나머지 자릿수의 경우의 수 탐색
for i in range(2, n+1):
    for j in range(10):
        # 가장 뒤에 오는 숫자가 0일 땐, 그 앞에 1만 올 수 있습니다.
        if (j == 0):
            dp[i][j] = dp[i-1][1]

        # 가장 뒤에 오는 숫자가 1~8일 땐, 그 앞에 +-1이 올 수 있습니다.
        elif (1 <= j <= 8):
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]

        # 가장 뒤에 오는 숫자가 9일 땐, 그 앞에 8만 올 수 있습니다.
        else:
            dp[i][j] = dp[i-1][8]

#  N번째 자릿수의 경우의 수를 모두 합한 뒤, 
# 1,000,000,000으로 나눈 나머지를 출력하면 정답
print(sum(dp[n]) % 1000000000)