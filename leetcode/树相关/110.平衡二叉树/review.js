/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return panduan(root)
};

var panduan = function (root) {
  if (root == null || root.left == null && root.right == null) return true;
  if (Math.abs(getDeep(root.left) - getDeep(root.right)) > 1) return false;
  return panduan(root.left) && panduan(root.right)
}

// 封装一个获取树的高度的函数
var getDeep = function (root) {
  if (root == null) return 0;
  return Math.max(getDeep(root.left), getDeep(root.right)) + 1;
}