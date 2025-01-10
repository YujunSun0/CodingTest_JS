from collections import deque
import sys

input = sys.stdin.read
data = input().splitlines()

q = deque()
output = []

n = int(data[0])

for i in range(1, n + 1):
    command = data[i].split()

    if command[0] == "push":
        q.append(int(command[1]))
    elif command[0] == "pop":
        output.append(q.popleft() if q else -1)
    elif command[0] == "size":
        output.append(len(q))
    elif command[0] == "empty":
        output.append(1 if not q else 0)
    elif command[0] == "front":
        output.append(q[0] if q else -1)
    elif command[0] == "back":
        output.append(q[-1] if q else -1)

print('\n'.join(map(str, output)))