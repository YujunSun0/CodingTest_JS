import sys
import math

input = sys.stdin.readline

# 1. T 입력
T = int(input())

# 2. N, M 입력
for _ in range(T):
    N, M = map(int, input().split())

    # 3. 조합의 수 구하기
    answer = math.comb(M, N)

    # 4. 원하는 형식으로 출력
    print(answer)