'use strict';
class Node {
  constructor(value = 0, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  insert_back(value) {
    const new_node = new Node(value);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      new_node.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.size += 1;
  }
  remove_back() {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size -= 1;
  }
  get(idx) {
    if (idx < 0 || idx >= this.size) {
      throw new Error('out of range');
    }
    if (idx < this.size / 2) {
      let current = this.head;
      for (let i = 1; i <= idx; i++) {
        current = current.next;
      }
      return current.value;
    } else {
      let current = this.tail;
      for (let i = this.size - 1; i >= idx; i--) {
        current = current.prev;
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
ll.insert_back(6);
ll.insert(2, 7);
ll.printAll();
ll.remove_back();
ll.printAll();
ll.remove(0);
ll.printAll();
