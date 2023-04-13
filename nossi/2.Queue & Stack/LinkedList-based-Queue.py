# 양방향으로 dequeue enqueue 가능!
# Queue는 코딩테스트에서 단독으로 나오지 않는다
# Queue자체보다는 다른 알고리즘을 구현하는 데 주로 이용된다
# ex) 너비우선탐색 BFS
from collections import deque
queue = deque()
print(queue)
# enqueue O(1)
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)
print(queue)
# dequeue O(1)
queue.appendleft(7)
queue.appendleft(8)
queue.appendleft(9)
print(queue)
queue.pop()
queue.pop()
print(queue)
queue.popleft()
queue.popleft()
queue.popleft()
print(queue)