def GCD(a, b):
    if b == 0:
        return a
    else:
        return GCD(b, a % b)


def LCM(a, b):
    ans = a * b // GCD(a, b)
    return ans


T = int(input())
for _ in range(T):
    a, b = map(int, input().split())
    print(LCM(a, b))