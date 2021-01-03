/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	let smaller = (dummySmaller = new ListNode(0));
	let bigger = (dummyBigger = new ListNode(0));
	while (head) {
		if (head.val < x) {
			smaller.next = head;
			smaller = smaller.next;
		} else {
			bigger.next = head;
			bigger = bigger.next;
		}
		head = head.next;
	}
	smaller.next = dummyBigger.next;
	bigger.next = null;
	return dummySmaller.next;
};
