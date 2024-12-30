def gcd(a,b):
    while b !=0:
        a, b = b, a%b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)

a,b = map(int, input().split())
c,d = map(int, input().split())

f = b * d
e = a*d + c * b 

gcd_value = gcd(f,e)
f //= gcd_value
e //= gcd_value

print(e,f)
