/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	const dummy = new ListNode(0);
	dummy.next = head;
	let l = dummy;
	let r = dummy;

	while (n !== 0) {
		r = r.next;
		n--;
	}

	while (r.next !== null) {
		r = r.next;
		l = l.next;
	}

	l.next = l.next.next;

	return dummy.next;
};
