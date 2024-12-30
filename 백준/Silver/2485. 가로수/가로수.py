import sys
import math

N = int(sys.stdin.readline())

T = []
for i in range(N):
    T.append(int(sys.stdin.readline()))

# 인접한 가로수들 사이의 거리를 구해서 최소, 최대 거리를 구합니다.
distances = []
for i in range(1, N):
    dist = T[i] - T[i-1]
    distances.append(dist)

# 최소공배수를 구합니다.
gcd = math.gcd(*distances) 

# 추가해야 하는 가로수의 개수를 계산합니다.
num_trees = (T[-1] - T[0]) // gcd + 1 - N

print(num_trees)