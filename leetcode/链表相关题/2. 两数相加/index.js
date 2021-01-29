function ListNode(val) {
	this.val = val;
	this.next = null;
}

var a1 = new ListNode(2);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

var a4 = new ListNode(5);
var a5 = new ListNode(6);
var a6 = new ListNode(4);
a4.next = a5;
a5.next = a6;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const l3 = new ListNode(0);
	let p1 = l1;
	let p2 = l2;
	let p3 = l3;
	let carry = 0;
	while (p1 || p2) {
		const v1 = p1 ? p1.val : 0;
		const v2 = p2 ? p2.val : 0;
		const val = v1 + v2 + carry;
		carry = Math.floor(val / 10);
		p3.next = new ListNode(val % 10);
		if (p1) p1 = p1.next;
		if (p2) p2 = p2.next;
		p3 = p3.next;
	}
	if (carry !== 0) {
		p3.next = new ListNode(carry);
	}
	return l3.next;
};

console.log(addTwoNumbers(a1, a4));
