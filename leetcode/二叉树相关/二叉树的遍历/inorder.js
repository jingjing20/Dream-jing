// 中序遍历

const root = require('./bt');

const inorderTraversal = function (root) {
	let arr = [];
	const inorder = (root) => {
		if (root === null) return null; //退出条件
		inorder(root.left);
		arr.push(root.val);
		inorder(root.right);
	};
	inorder(root); //递归方法
	return arr;
};

const DGinorderTraversal = (root) => {
	if (root === null) {
		return null;
	}
	const stack = [];
	const res = [];
	let p = root;
	while (stack.length > 0 || p) {
		while (p) {
			stack.push(p);
			p = p.left;
		}
		const topNode = stack.pop();
		res.push(topNode.val);
		p = topNode.right;
	}
	return res;
};

console.log(DGinorderTraversal(root));
console.log(inorderTraversal(root));
