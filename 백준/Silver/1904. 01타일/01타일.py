n = int(input())

dp = [0] * 10000001

# 1칸을 채우는 경우의 수 1개, 2칸 채우는 경우의 수 2개
dp[1] = 1
dp[2] = 2

# 보텀업 dp
for i in range (3, n+1) :
    dp[i] = (dp[i-1] + dp[i-2]) % 15746

print(dp[n])