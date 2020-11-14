/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 先把链表打散存入一个数组 stack
  let stack = [];
  let temp = new ListNode();
  while (head) {
    temp = head.next;
    head.next = null;
    stack.push(head);
    head = temp;
  }
  // 再把链表重新连接起来
  let i = 0, j = stack.length - 1;
  while (i < j) {
    stack[i].next = stack[j];
    i + 1 < j && (stack[j].next = stack[i + 1]);
    i++;
    j--;
  }
  return stack[0];
};