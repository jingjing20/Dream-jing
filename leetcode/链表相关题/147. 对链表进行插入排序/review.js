/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
	if (head === null) return null;
	let dummyHead = new ListNode(0);
	dummyHead.next = head;
	let temp = null;
	let prev = null;
	let cur = dummyHead.next;
	while (cur && cur.next) {
		if (cur.val <= cur.next.val) {
			cur = cur.next;
		} else {
			temp = cur.next; // 保存将要重新插入排序的节点
			cur.next = cur.next.next; // 删除当前节点

			prev = dummyHead;
			while (prev.next.val <= temp.val) {
				prev = prev.next;
			}

			// 将 temp 节点插入到 prev 和 prev.next 之间
			temp.next = prev.next;
			prev.next = temp;
		}
	}
	return dummyHead.next;
};
