
// 重点：二叉搜索树的中序遍历后值就是递增的

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
var getMinimumDifference = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1;
  const dfs = (root) => {
     if (root === null) {
         return;
     }
     dfs(root.left)
     if (pre === -1) {
         pre = root.val;
     } else {
         ans = Math.min(ans, root.val - pre);
         pre = root.val;
     }
     dfs(root.right);
  }
  dfs(root);
  return ans
 };