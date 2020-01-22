class ListNode:
     def __init__(self, x):
         self.val = x
         self.next = None

class Solution:
    def reverseList(self,head:ListNode) -> ListNode:
        if not head: return None
        prev = None #前驱节点
        cur = head #当前节点
        while cur:
            cur.next, prev, cur = prev, cur,  cur.next
        return prev  