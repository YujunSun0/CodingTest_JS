import sys
from collections import deque
input = sys.stdin.readline

# 입력
N = int(input())
arr = list(map(int, input().split()))

d = deque()
for i in range(N): # 덱에 차례로 풍선 번호를 넣음
    d.append(i)

for i in range(N):
    out = d.popleft() # 풍선 제거
    print(out+1, end=' ') # 풍선 번호 출력
    if len(d) == 0: # 덱에 든게 없으면 break
        break
    rotation = arr[out] # 풍선 안 종이에 적힌 숫자
    if rotation < 0: # 음수일 경우
        for j in range(abs(rotation)): # 종이에 적힌 숫자는 음수일수도 있으므로 절댓값
            x = d.pop() # 제거 
            d.appendleft(x) # 추가
    elif rotation > 0: # 양수일 경우
        for j in range(abs(rotation)-1): # 종이에 적힌 숫자는 음수일수도 있으므로 절댓값
            x = d.popleft() # 제거
            d.append(x) # 추가