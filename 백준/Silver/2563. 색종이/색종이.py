n = int(input())
array = [[0] * 100 for _ in range(100)]

for _ in range(n):
    a, b = map(int,input().split())
    for i in range(a, a + 10):
        for j in range(b, b + 10):
            array[i][j] = 1
            
cnt = 0

for i in range(100):
    cnt += array[i].count(1)

print(cnt)