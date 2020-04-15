function ListNode(val) {
  this.val = val;
  this.next = null;
}

var a1 = new ListNode(5);
var a2 = new ListNode(0);
// var a3 = new ListNode(2);
a1.next = a2;
// a2.next = a3;

var a4 = new ListNode(2);
var a5 = new ListNode(9);
// var a6 = new ListNode(8);
a4.next = a5;
// a5.next = a6;

var addTwoNumbers = function (l1, l2) {
  let p1 = l1
  let p2 = l2
  let carry = 0
  const dummy = new ListNode();
  let pointer = dummy
  while (p1 || p2 || carry) {
    const num1 = p1 ? p1.val : 0
    const num2 = p2 ? p2.val : 0
    const sum = num1 + num2 + carry
    if (sum > 9) {
      pointer.next = new ListNode(sum % 10)
      carry = 1
    } else {
      pointer.next = new ListNode(sum)
      carry = 0
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    pointer = pointer.next
  }
  return dummy.next
};

console.log(addTwoNumbers(a1, a4));

