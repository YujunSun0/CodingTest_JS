n, m = map(int,input().split(" "))


l = []
    
def dfs(start):
    if len(l) == m:
       print(' '.join(map(str,l)))
       return
    for i in range(start,n+1):
        l.append(i)
        dfs(i)
        l.pop()


dfs(1)