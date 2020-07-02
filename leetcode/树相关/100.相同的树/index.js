//思路：
// 1、如果都为 null 也为相等的树
// 2、一个为 null 一个不是 不是相等的树
// 3、如果当前节点的值不相等 不是相等的树
// 4、递归比较子节点
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
