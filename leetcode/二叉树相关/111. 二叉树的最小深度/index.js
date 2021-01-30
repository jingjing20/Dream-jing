// 深度优先遍历每个节点找出最小层级

/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function (root) {
	if (!root) return 0;
	let res = Number.MAX_SAFE_INTEGER;
	const dfs = (root, l) => {
		if (!root) return 0;
		if (!root.left && !root.right) {
			res = Math.min(res, l);
		}
		dfs(root.left, l + 1);
		dfs(root.right, l + 1);
	};
	dfs(root, 1);
	// 递归完了返回结果
	return res;
};
