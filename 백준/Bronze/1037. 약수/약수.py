N = int(input())

A = list(map(int, input().split()))

max_nbr = max(A)
min_nbr = min(A)

print(max_nbr * min_nbr)