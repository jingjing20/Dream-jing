// 后序遍历

const root = require('../bt');

var DGpostorderTraversal = function (root) {
	let arr = [];
	const inorder = (root) => {
		if (root === null) return null; //退出条件
		inorder(root.left);
		inorder(root.right);
		arr.push(root.val);
	};
	inorder(root); //递归方法
	return arr;
};

// 非递归	借用了先序遍历的思路。先序遍历是 根->左->右。后序遍历是 左->右->根。其实后序遍例可以采用先序遍历再反转。同时入栈的时候需要和先序遍历相反。然后往结果数组的头部不断插入节点的值
const postorderTraversal = (root) => {
	const res = [];
	const stack = [];
	if (root) stack.push(root); // 当根节点不为空的时候，将根节点入栈
	while (stack.length > 0) {
		const curNode = stack.pop();
		res.unshift(curNode.val);
		if (curNode.left) stack.push(curNode.left);
		if (curNode.right) stack.push(curNode.right);
	}
	return res;
};

console.log(DGpostorderTraversal(root));
console.log(postorderTraversal(root));
