/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false;
  const jing = new Set();
  while(head) {
      if(jing.has(head)) return true;
      jing.add(head, true);
      head = head.next;
  }
  return false;
};
