/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else{
    let right = maxDepth(root.right);
    let left = maxDepth(root.left);
    return Math.max(left, right) + 1;
  }
};


// 递归啊递归