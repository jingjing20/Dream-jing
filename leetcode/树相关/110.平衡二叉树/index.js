var isBalanced = function (root) {
  return recusive(root);
};
var recusive = function (root) {
  if (root == null || (root.left == null && root.right == null)) return true;
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
  return recusive(root.left) && recusive(root.right);
}

// 获取树的深度函数
var getDepth = function (root) {
  if (root == null) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}
