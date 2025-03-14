import sys
input = sys.stdin.readline

def dfs(cnt):
    if cnt == m:
        print(' '.join(map(str, arr)))
        return
    for i in range(1, n + 1):
        arr[cnt] = i
        dfs(cnt + 1)

n, m = map(int, input().split())
arr = [0 for _ in range(m)]
dfs(0)