// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
var levelOrder = function (root) {
	if (!root) return [];
	let res = [];
	let quene = [root];
	while (quene.length > 0) {
		let arr = [];
		let len = quene.length;
		while (len--) {
			const node = quene.shift();
			arr.push(node.val);
			if (node.left) quene.push(node.left);
			if (node.right) quene.push(node.right);
		}
		res.push(arr);
	}
	return res;
};

console.log(levelOrder(n1)); //jing-log
