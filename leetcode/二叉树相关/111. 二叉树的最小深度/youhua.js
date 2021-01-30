// 广度优先遍历只需要遍历到首个叶子节点即可以返回当前叶子节点的层级
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
	if (!root) return 0;
	let q = [[root, 1]];
	while (q.length > 0) {
		const [n, l] = q.shift();
		if (!n.left && !n.right) {
			return l;
		}
		if (n.left) q.push([n.left, l + 1]);
		if (n.right) q.push([n.right, l + 1]);
	}
};
