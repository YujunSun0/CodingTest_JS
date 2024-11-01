H,M = map(int, input().split())
time=int(input())

total = M + time

H += total // 60
M  = total % 60

if H > 23:
    H -= 24
    
print(H, M)