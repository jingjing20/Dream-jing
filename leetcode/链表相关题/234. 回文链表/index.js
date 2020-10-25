/**
 * 1、用快慢指针把链表的后半部分找出来
 * 2、反转后半部分链表（206.反转链表）
 * 3、比较前半部分和反转后的后半部分的链表
 * 4、返回结果和还原好的链表
 */

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

// 定义一个找链表后半部分的方法
const findLasthalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
}
// 定义一个反转链表的方法
const releaseList = (head) => {
  let cur = head;
  let pre = null;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
var isPalindrome = function(head) {
  if (head == null) return true;
  // 找到前半部分链表的尾节点并反转后半部分链表
  const lasthalf = findLasthalf(head);
  const release = releaseList(lasthalf.next);

  // 判断是否回文
  let ListOne = head;
  let ListTwo = release;
  let result = true;
  while (result && ListTwo != null) {
    if (ListOne.val != ListTwo.val) result = false;
    ListOne = ListOne.next;
    ListTwo = ListTwo.next;
  }
  lasthalf.next = releaseList(release);
  return result;
};