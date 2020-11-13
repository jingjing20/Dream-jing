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
var oddEvenList = function (head) {
  if (head === null) {
    return head;
  }
  let dummy = head.next;
  let left = head, right = dummy;
  while (right !== null && right.next !== null) {
    left.next = right.next;
    left = left.next;
    right.next = left.next;
    right = right.next;
  }
  left.next = dummy;
  return head;
}