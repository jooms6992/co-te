// https://leetcode.com/problems/design-browser-history/
'use strict';

class ListNode {
  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
class BrowserHistory {
  constructor(homepage) {
    this.head = this.current = new ListNode(homepage);
  }
  visit(url) {
    this.current.next = new ListNode(url, null, this.current);
    this.current = this.current.next;
  }
  back(steps) {
    while (steps > 0 && this.current.prev) {
      steps--;
      this.current = this.current.prev;
    }

    return this.current.val;
  }
  forward(steps) {
    while (steps > 0 && this.current.next) {
      steps--;
      this.current = this.current.next;
    }
    return this.current.val;
  }
}
