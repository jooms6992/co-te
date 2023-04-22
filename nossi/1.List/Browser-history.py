# https://leetcode.com/problems/design-browser-history/
class ListNode(object):
    def __init__(self, val=0, next=None, prev=None):
        self.val = val
        self.next = next
        self.prev = prev
class BrowserHistory(object):
    def __init__(self, homepage):
        # 이 문제에서는 head가 없어도 되지만 형식상 써줬다.
        self.head = self.current = ListNode(val=homepage)
    def visit(self, url):
        # clear up memory free 안해줘도 되는건가? => GC
        self.current.next = ListNode(val=url, prev=self.current)
        self.current = self.current.next
        return None
    def back(self, steps):
        while steps > 0 and self.current.prev != None:
            steps -= 1
            self.current = self.current.prev
        return self.current.val
    def forward(self, steps):
        while steps > 0 and self.current.next != None:
            steps -= 1
            self.current = self.current.next
        return self.current.val