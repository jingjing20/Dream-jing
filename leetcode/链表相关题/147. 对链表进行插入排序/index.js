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
    const dummyHead = new ListNode(0);        // 定义一个哑节点
    dummyHead.next = head;
    let cur = head;         // 当前节点
    let prev = null;        // 要插入节点的前一个节点
    let temp = null;        // 暂存需要插入排序的节点中间节点
    while(cur && cur.next) {
        if (cur.val <= cur.next.val) {
            cur = cur.next;
        } else {
            temp = cur.next;    // 暂存需要重新排序的节点
            cur.next = cur.next.next;   // 删除需要重新排序的节点

            /**
             * 找到需要插入的地方
             */
            prev = dummyHead;
            while(prev.next.val <= temp.val) {
                prev = prev.next;
            }

            temp.next = prev.next;
            prev.next = temp;
        }
    }

    return dummyHead.next;
};