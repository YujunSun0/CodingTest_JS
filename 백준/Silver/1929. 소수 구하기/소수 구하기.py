import sys
import math

def is_prime(x):
    # 1은 소수가 아니므로 False 반환
    if x == 1:
        return False
    # x가 2부터 int(x의 제곱근)+1 까지의 수로 나누어떨어지면 소수가 아니므로 False 반환
    for i in range(2, int(math.sqrt(x)+1)):
        if x % i == 0:
            return False
    # 위의 조건에 해당하지 않으면 소수이므로 True 반환
    return True

# 입력받은 두 수의 범위를 저장
m, n = map(int, sys.stdin.readline().split())

# m부터 n까지의 수 중에서 소수인 수를 출력
for i in range(m, n+1):
    if is_prime(i):
        print(i)