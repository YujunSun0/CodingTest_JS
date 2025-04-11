import sys

N = int(sys.stdin.readline())

paper = []
for _ in range(N):
    li = list(map(int, sys.stdin.readline().split()))
    paper.append(li)

def check(paper):
    count__1 = 0
    count_0 = 0
    count_1 = 0

    for p in paper:
        count__1 += p.count(-1)
        count_0 += p.count(0)
        count_1 += p.count(1)

    if (count_0 == 0) and (count_1 == 0):
        return '-1'
    elif (count__1 == 0) and (count_1 == 0):
        return '0'
    elif (count__1 == 0) and (count_0 == 0):
        return '1'
    else:
        return False

def divide(N, paper):
    size = N // 3

    new_paper = []
    for i in range(3):
        for j in range(3):
            p = [row[size * j : size * (j + 1)] for row in paper[size * i : size * (i + 1)]]
            new_paper.append(p)

    for np in new_paper:
        result = check(np)
        if (not result):
            divide(size, np)
        else:
            answer[result] += 1

answer = {'-1' : 0, '0' : 0, '1' : 0}
result = check(paper)
if (not result):
    divide(N, paper)
else:
    answer[result] += 1

print(answer['-1'])
print(answer['0'])
print(answer['1'])

