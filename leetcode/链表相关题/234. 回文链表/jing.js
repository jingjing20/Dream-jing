/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const stack = [];
  while (head) {
      stack.push(head.val);
      head = head.next;
  }
  let j = stack.length-1;
  let result = true;
  for (let i = 0; i < j; i++) {
      if(stack[i] !== stack[j]) {
          result = false;
      }
      j--;
  }
  return result;
};