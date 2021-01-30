/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	let res = 0;
	const dfs = (root, l) => {
		if (!root) return null;
		if (!root.left && !root.right) {
			res = Math.max(res, l);
		}
		dfs(root.left, l + 1);
		dfs(root.right, l + 1);
	};
	dfs(root, 1);
	// 递归完了返回结果
	return res;
};
