// 先序遍历

const root = require('../bt');

// 递归
var DGpreorderTraversal = function (root) {
	let arr = [];
	const inorder = (root) => {
		if (root === null) return null; //退出条件
		arr.push(root.val);
		inorder(root.left);
		inorder(root.right);
	};
	inorder(root); //递归方法
	return arr;
};

// 非递归
const preorderTraversal = (root) => {
	const res = []; // 存放结果
	const stack = [];
	if (root) stack.push(root); // 当根节点不为空的时候，将根节点入栈
	while (stack.length > 0) {
		const curNode = stack.pop();
		// 第一步的时候，先访问的是根节点
		res.push(curNode.val);
		// 我们先打印左子树，然后右子树
		// 所以先加入栈的是右子树，然后左子树
		if (curNode.right) stack.push(curNode.right);
		if (curNode.left) stack.push(curNode.left);
	}
	return res;
};
console.log(DGpreorderTraversal(root));
console.log(preorderTraversal(root));
