/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let middle = head;
  let end = head;

  while(end && end.next) {
      middle = middle.next
      end = end.next.next
  }

  return middle
};

function intuition() {
      // 사이즈 구하기
    let current = head
    let size = 0;
    while(current) {
        current = current.next
        size++
    }
    // middle index구하기
    let middle = 0;
    if(size % 2 === 0) {
        middle = (size / 2)
    } else {
        middle = Math.floor(size / 2)
    }
    // middle index로 이동하기
    current = head;
    for(let i = 0; i < middle; i++) {
        current = current.next
    }
    return current
}