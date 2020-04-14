/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var a1 = new ListNode(5);
var a2 = new ListNode(0);
var a3 = new ListNode(2);
a1.next = a2;
a2.next = a3;

var a4 = new ListNode(2);
var a5 = new ListNode(9);
var a6 = new ListNode(8);
a4.next = a5;
a5.next = a6;

var addTwoNumbers = function (l1, l2) {
  let Arrayone = [], Arraytwo = [];
  while (l1) {
    Arrayone.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    Arraytwo.push(l2.val)
    l2 = l2.next;
  }
  let carry = 0;    //进位
  let jing = [];
  let dummy;
  while (Arrayone.length > 0 || Arraytwo.length > 0 || carry !== 0) {
    let sum1 = Arrayone.length > 0 ? Arrayone.pop() : 0;
    let sum2 = Arraytwo.length > 0 ? Arraytwo.pop() : 0;
    let sum = sum1 + sum2 + carry;
    carry = sum / 10 | 0;
    let curNode = new ListNode(sum % 10);
    curNode.next = dummy;
    dummy = curNode;
  }
  return dummy;
}
// addTwoNumbers(a1, a4)
console.log(addTwoNumbers(a1, a4))