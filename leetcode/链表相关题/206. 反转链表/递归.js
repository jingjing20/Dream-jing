function ListNode(val) {
	this.val = val;
	this.next = null;
}

var reverseList = (head) => {
	if (head == null || head.next == null) {
		// 退出条件
		return head; // 头结点
	} else {
		let newHead = reverseList(head.next); // 递归
		head.next.next = head; //反过来
		head.next = null; // 把之前的next 干掉
		return newHead;
	}
};

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(reverseList(n1));
