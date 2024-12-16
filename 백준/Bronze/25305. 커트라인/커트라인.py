N,k = map(int,input().split())
scores = map(int,input().split())
print(sorted(scores)[-k])