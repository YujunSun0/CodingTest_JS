from sys import stdin

input = stdin.readline

primes = [True for _ in range(1000001)]
for i in range(2, 1000001):
    if primes[i] == True:
        for j in range(i*2, 1000001, i):
            primes[j] = False

T = int(input())

for i in range(T):
    n = int(input())
    partition = 0
    for num in range(2, n // 2 + 1):
        if primes[num] and primes[n - num]:
            partition += 1
    print(partition)