
n = int(input())
x, y = [], []
for i in range(n):
    a, b= map(int, input().split())
    x.append(a)
    y.append(b)

width = max(x) - min(x)
height = max(y) - min(y)
print(width * height)