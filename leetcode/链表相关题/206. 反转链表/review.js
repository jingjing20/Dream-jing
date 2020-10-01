function ListNode(val) {
  this.val = val
  this.next = null
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

// 当前结点的next 指向它的前驱结点 
// 之前的前驱结点变成当前结点 
// 当前结点变成原结点的后继结点 
// 如果为null, 完成遍历

function reverseList(head) {
  if(head === null || head.next === null) return head;
  let cur = head;   // 当前节点
  let pre = null;   // 前驱节点
  while(cur) {
    let next = cur.next;   // 定义变量把后继节点存起来 因为要对当前节点的后继节点进行操作
    cur.next = pre;        // 当前结点的next 指向它的前驱结点
    pre = cur;             // 把当前节点的值给前驱节点的变量
    cur = next;            // 当前节点等于下一个节点继续遍历下去
  }
  return pre;
}

console.log(reverseList(n1))