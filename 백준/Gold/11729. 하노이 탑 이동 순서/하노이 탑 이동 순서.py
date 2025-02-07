n=int(input())
def hanoi(num,start,mid,end):
    
    if num==1:
        print(start,end)

    else:
        hanoi(num-1,start,end,mid)	#가장 아래에 있는 원판 제외 나머지 2로 이동(1->2)
        print(start,end)	#처음 장대에 남은 마지막 원판을 3으로(1->3)
        hanoi(num-1,mid,start,end)	#2번째 장대에 있는 다른 원판을 3으로(2->3)

print(2**n-1)
hanoi(n,1,2,3)