# List로 만들면 dequeue 할때 시간복잡도가 O(n)이 되므로 Linked-List로 만든 Queue를 사용한다
# queue 선언
q = []
# enqueue O(1)
q.append(1)
q.append(2)
q.append(3)
q.append(4)
# dequeue O(n)
q.pop(0)
q.pop(0)
q.pop(0)