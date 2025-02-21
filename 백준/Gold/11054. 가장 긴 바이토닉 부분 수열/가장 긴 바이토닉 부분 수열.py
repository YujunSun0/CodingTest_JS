n = int(input())
A = list(map(int,input().split())) 

# 감소하는 수열을 증가하는 수열과 한번에 찾기 위해 수열을 뒤집음 
reverseA = A[::-1] 

inc_dp = [1]*n # 증가 dp
dec_dp = [1]*n # 감소 dp

for i in range(n):
    for j in range(i):
        # 증가 수열 
        if A[i] > A[j]:
            inc_dp[i] = max(inc_dp[i], inc_dp[j]+1)
        
        # 감소 수열 
        if reverseA[i] > reverseA[j]:
            dec_dp[i] = max(dec_dp[i], dec_dp[j]+1)

# 뒤집은 수열 복구 
dec_dp = dec_dp[::-1]

# 증가하는 수열 , 감소하는 수열 최대값 찾기 
result = []
for i in range(n):
    result.append(dec_dp[i] + inc_dp[i]-1)

print(max(result))