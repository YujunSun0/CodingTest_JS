import sys
input = sys.stdin.readline

# 입력
n = int(input())

# n개의 정수를 입력 받아 리스트 lst에 저장
lst = [int(input()) for _ in range(n)]

# lst를 오름차순으로 정렬하고, 각 원소를 개행문자와 함께 출력
print(*sorted(lst), sep='\n')