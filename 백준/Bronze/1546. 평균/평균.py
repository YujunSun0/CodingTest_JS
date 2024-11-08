n = input()
myList = list(map(int, input().split()))

myMax = max(myList)
sum = sum(myList)

print(sum * 100 / myMax / int(n))