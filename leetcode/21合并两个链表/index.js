/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(1)
let l2 = new ListNode(1)
let l3 = new ListNode(2)
let l4 = new ListNode(3)
let l5 = new ListNode(4)
let l6 = new ListNode(4)
l1.next = l3
l3.next = l5
l2.next = l4
l4.next = l6
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2
  }
  if (l2 == null) {
    return l1
  }
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  } else {
    l1.next = mergeTwoLists(l2, l1.next)
    return l1
  }
};

console.log(mergeTwoLists(l1, l2))

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 递归啊递归