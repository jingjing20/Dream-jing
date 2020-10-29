/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (root.val === sum && !(root.left || root.right)) return true;
  return (
    (root.left && hasPathSum(root.left, sum - root.val)) ||
    hasPathSum(root.right, sum - root.val)
  );
};
