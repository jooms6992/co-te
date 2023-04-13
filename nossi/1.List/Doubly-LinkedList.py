class Node :
    def __init__(self, value = 0, next = None, prev = None):
        self.value = value
        self.next = next
        self.prev = prev

class LinkedList(object):
    def __init__(self):
        self.size = 0 # node의 개수
        self.head = None
        self.tail = None
    def insert_back(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            # 다음 노드를 가리키기 위해선(next를 사용하기 위해선) 첫 노드를 가리키게해놔야 한다
            self.tail = new_node
        else:
            # 현재 포인터(tail)가 위치한 노드를 new_node를 가리키게 만든다
            self.tail.next = new_node
            # new_node의 prev가 현재 포인터에 위치한 노드를 가리키게 한다
            new_node.prev = self.tail # doubly에는 이게 추가됨
            # 위 두 작업을 마치고 포인터를 옮겨준다, new_node에.
            self.tail = self.tail.next
        self.size += 1

    def remove_back(self): # => 이걸 구현 하려면 doubly linked list 여야 한다.
        self.tail = self.tail.prev
        self.tail.next = None
        self.size -= 1
        
    def get(self, idx):
        # error(out of range )
        if idx < 0 or idx >= self.size:
            raise Exception("out of range")
        if idx < self.size / 2:
            current = self.head
            for _ in range(idx):
                current = current.next
            return current.value
        else:
            current = self.tail
            for _ in range(self.size -1, idx, -1 ):
                current = current.prev
            return current.value
        
    def insert(self, idx, value):
        new_node = Node(value)
        if idx == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            for _ in range(idx-1):
                current = current.next
            new_node.next = current.next
            current.next = new_node
        self.size += 1

    def remove(self, idx):
        if idx == 0:
            self.head = self.head.next # garbage collector가 알아서 처리해준다.
        else:
            current = self.head
            for _ in range(idx-1):
                current = current.next
            current.next = current.next.next
        self.size -= 1

    def print(self):
        current = self.head
        while(current):
            print(current.value, end="")
            current = current.next
            if current:
                print("->", end="")
        print()

ll = LinkedList()
ll.insert_back(1)
ll.insert_back(2)
ll.insert_back(3)
ll.insert_back(4)
ll.insert_back(5)
ll.insert_back(6)
ll.insert_back(7)
ll.insert_back(8)
ll.print()
ll.remove_back()
ll.print()
print(ll.get(0))
print(ll.get(1))
print(ll.get(2))
print(ll.get(3))
print(ll.get(4))
print(ll.get(5))