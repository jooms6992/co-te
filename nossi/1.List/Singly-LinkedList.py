class Node :
    # 클래스로 노드를 구현하면 노드를 생성할 때 value값과 next값을 초기화해준다
    # 어떠한 값도 들어오지 않으면 value는 0으로 next는 None으로 초기화
    def __init__(self, value = 0, next = None):
        self.value = value
        self.next = next

first = Node(1)
second = Node(2)
third = Node(3)
# first의 next값이 second를 가리킨다
first.next = second
second.next = third
first.value = 6

class LinkedList(object):
    def __init__(self):
        # head가 LinkedList의 첫 번째 노드를 카리켜야한다
        # 그래서 LinkedList의 클래스를 만들 때 head를 꼭 가져야한다
        # head를 통해서(시작으로) 어느 노드로든 접근 가능하다
        self.size = 0 # node의 개수
        self.head = None
    
    def insert_back(self, value):
        new_node = Node(value)
        # head가 처음에 None을 가리키고 있을 때는 아직 노드가 하나도 없을때이니깐
        # 처음에만 head를 new_node를 가리키게 한다
        if self.head is None:
            self.head = new_node
        # 맨 뒤의 노드가 new_node를 가리켜야 한다.
        else:
            # head는 첫 노드를 가리키는 것에 고정해놔야 하므로
            # current라는 변수를 새로 만들어 head가 처음 가리키는 곳을 똑같이 가리키게 한다
            current = self.head
            # current.next의 값이 none이 된다는 뜻은 마지막 노드까지 왔다는 뜻
            while(current.next):
                current = current.next
            current.next = new_node
        self.size += 1
    # 시간복잡도 O(n) n번 만큼 옮겨가기 때문
    def get(self, idx):
        # error(out of range )
        if idx < 0 or idx >= self.size:
            raise Exception("out of range")
        current = self.head
        # 해당 인덱스까지 한칸씩 옮겨간다
        for _ in range(idx):
            current = current.next
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
ll.remove(3)
ll.insert(2, 7)
print(ll.get(0))
ll.print()