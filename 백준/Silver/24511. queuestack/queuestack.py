import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
m = int(input())
c = list(map(int, input().split()))

answer = []
for i in range(n):
    if a[i] == 0:
        answer.append(b[i])
answer.reverse()

if answer == []:
    print(*c)
else:
    if m > len(answer):
        for j in range(m - len(answer)):
            answer.append(c[j])
        print(*answer)
    else:
        print(*answer[0:m])