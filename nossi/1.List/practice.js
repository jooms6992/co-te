class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert_back(value) {
    const new_node = new Node(value);
    if (!this.head) {
      this.head = new_node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new_node;
    }
    this.size++;
  }
  insert(idx, value) {
    const new_node = new Node(value);
    if (idx === 0) {
      new_node.next = this.head;
      this.head = new_node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      new_node.next = current.next;
      current.next = new_node;
    }
    this.size++;
  }
  remove(idx) {
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 1; i <= idx - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }
  get(idx) {
    if (idx < 0 || idx > this.size) {
      throw new Error('out of range!');
    } else {
      let current = this.head;
      for (let i = 1; i <= idx; idx++) {
        current = current.next;
      }
      return current.value;
    }
  }
  printAll() {
    let result = '';
    let current = this.head;
    while (current) {
      result += current.value;
      current = current.next;
      if (current) {
        result += '->';
      }
    }
    console.log(result);
  }
}

const ll = new LinkedList();
ll.insert_back(1);
ll.insert_back(2);
ll.insert_back(3);
ll.insert_back(4);
ll.insert_back(5);
ll.printAll();
ll.insert(2, 7);
ll.printAll();
ll.remove(3);
ll.printAll();
