student=[]
not_student=[]
for i in range(28):
    s=int(input())
    student.append(s)
for i in range(1,31):
    if i not in student:
        not_student.append(i)
print(min(not_student))
print(max(not_student))
