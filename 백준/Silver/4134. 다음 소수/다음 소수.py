def is_prime(n):
    """주어진 수가 소수인지 판별하는 함수"""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    # 제곱근까지만 확인하면 됨
    for i in range(3, int(n ** 0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

def next_prime(n):
    """n보다 크거나 같은 가장 작은 소수를 찾는 함수"""
    while True:
        if is_prime(n):
            return n
        n += 1

# 입력 처리
T = int(input())  # 테스트 케이스 개수
for _ in range(T):
    n = int(input())
    print(next_prime(n))