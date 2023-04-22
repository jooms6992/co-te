'use strict';

// Linked List 장점
// 새로운 요소 삽입,삭제시 용이
// restructing이 덜 복잡함

// Linked List 단점
// array보다 많은 메모리 사용
// 특정 요소를 검색시 비효율적임

class Node {
  constructor(value = 0, next = undefined) {
    this.value = value;
    this.next = next;
  }
}

const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
first.next = second;
second.next = third;
first.value = 6;

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = undefined;
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
  get(idx) {
    if (idx < 0 || idx >= this.size) {
      throw new Error('out of range');
    } else {
      let current = this.head;
      for (let i = 1; i <= idx; i++) {
        current = current.next;
      }
      return current.value;
    }
  }
  insert(idx, value) {
    const new_node = new Node(value);
    if (idx === 0) {
      new_node.next = this.head;
      this.head = new_node;
    } else {
      let current = this.head;
      for (let i = 1; i <= idx - 1; i++) {
        current = current.next;
      }
      new_node.next = current.next;
      current.next = new_node;
    }
    this.size += 1;
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
    this.size -= 1;
  }
  printAll() {
    let current = this.head;
    let result = '';
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
