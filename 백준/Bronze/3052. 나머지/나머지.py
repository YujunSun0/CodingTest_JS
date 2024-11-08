nums = set()  # 중복되는 요소를 제거
for _ in range(10):
    i = int(input())
    nums.add(i%42)  # 집합자료형에 원소를 추가할 때 add 함수를 사용

print(len(nums))
