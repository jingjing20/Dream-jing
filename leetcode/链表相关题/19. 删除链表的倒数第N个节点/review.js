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
	const dummyHead = new ListNode(0); // 创建一个哑节点
	dummyHead.next = head;
	let left = dummyHead;
	let right = dummyHead;
	while (n !== 0) {
		right = right.next;
		n--;
	}

	while (right.next !== null) {
		right = right.next;
		left = left.next;
	}

	left.next = left.next.next;
	return dummyHead.next;
};
