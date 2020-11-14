// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例 1:

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
// 示例 2:

// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

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
    head.next = null;   // 打散链表
    head = temp;
  }
  let i = -1, j = stack.length;
  while (++i < --j) {
    stack[i].next = stack[j];
    i + 1 < j && (stack[j].next = stack[i + 1])
  }
  return stack[0];
};