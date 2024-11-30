dots = []
x = []
y = []

for _ in range(3):
    dots.append(list(map(int, input().split())))

for [a, b] in dots:
    if a in x:
        x.remove(a)
    else:
        x.append(a)
    
    if b in y:
        y.remove(b)
    else:
        y.append(b)

print(x[0], y[0])