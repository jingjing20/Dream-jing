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
 * @param {number} targetSum
 * @return {boolean}
 */

//  这里的 root 其实是输入的节点数组的第一个节点
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	let res = false;
	const dfs = (root, sum) => {
		if (!root.left && !root.right && sum === targetSum) {
			res = true;
		}
		if (root.left) dfs(root.left, sum + root.left.val);
		if (root.right) dfs(root.right, sum + root.right.val);
	};
	dfs(root, root.val);
	return res;
};

console.log(hasPathSum([], 1)); //jing-log
