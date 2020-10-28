/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let stack = [];
  let temp = new ListNode();
  while (head) {
    temp = head.next;
    stack.push(head);
    head.next = null;
    head = temp;
  }
  let i = -1, j = stack.length;
  while (++i < --j) {
    stack[i].next = stack[j];
    i + 1 < j && (stack[j].next = stack[i + 1])
  }
  return stack[0];
};