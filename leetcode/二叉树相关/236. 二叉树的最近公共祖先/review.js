/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (root === null) return null;
	if (root === p || root === q) return root; // 搜索到任何一个目标节点就返回当前节点
	let left = lowestCommonAncestor(root.left, p, q); // 搜索左子树
	let right = lowestCommonAncestor(root.right, p, q); // 搜索右子树
	if (left && right) return root; // 左右子树都有结果就返回 root 节点
	if (left === null) return right; // 左边为 null 就返回右节点
	return left;
};
