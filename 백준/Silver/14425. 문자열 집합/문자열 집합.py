import sys

input = sys.stdin.readline

N, M = map(int, input().rstrip().split())

S = {}
count = 0

for _ in range(N):
  S[input().rstrip()] = 0

for _ in range(M):
  if input().rstrip() in S:
    count += 1

print(count)