function ListNode(val) { //链表结点对象
    this.val = val; //链表结点 
    this.next = null; //指针
    return this
}

var removeDuplicates = function(head) {
    if (head == null || head.next == null) return head;
    var cur = head;
    while (cur.next != null) {
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next; //重复的指向下一个
        } else {
            cur = cur.next
        }
    }
}


const n1 = new ListNode(1); //头指针 next
const n2 = new ListNode(1);
const n3 = new ListNode(2);
const n4 = new ListNode(3);
const n5 = new ListNode(3);
const n6 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

console.log(n1);
removeDuplicates(n1);