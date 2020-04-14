/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let countl1 = 0, countl2 = 0
  let l1List = l1
  let l2List = l2
  while (l1List) {
    countl1++
    l1List = l1List.next
  }

  while (l2List) {
    countl2++
    l2List = l2List.next
  }

  // creat the frontest List
  let tmpList = new ListNode(0)
  let cur = tmpList
  let diff = Math.abs(countl2 - countl1)
  while (diff--) {
    cur.next = new ListNode(0)
    cur = cur.next
  }

  if (countl1 < countl2) {
    cur.next = l1
    l1 = tmpList.next
  } else if (countl2 < countl1) {
    cur.next = l2
    l2 = tmpList.next
  }


  // flag: 1 shows digit carry, 0 not;
  let digitCarry = 0

  /**
   * calculate the sum of l1 and l2
   */
  function listNodeAdd(l1, l2) {
    if (l1 === null) return

    listNodeAdd(l1.next, l2.next)

    let sum = l1.val + l2.val + digitCarry
    if (sum >= 10) {
      l1.val = sum % 10
      digitCarry = 1
    } else {
      l1.val = sum
      digitCarry = 0
    }
  }

  listNodeAdd(l1, l2)

  let result = l1
  if (digitCarry === 1) {
    result = new ListNode(1)
    result.next = l1
  }

  return result
}