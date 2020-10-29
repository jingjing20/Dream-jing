// 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
// 例如，从根到叶子节点路径 1->2->3 代表数字 123。
// 计算从根到叶子节点生成的所有数字之和。
// 说明: 叶子节点是指没有子节点的节点。

// 示例 1:
// 输入: [1,2,3]
//     1
//    / \
//   2   3
// 输出: 25
// 解释:
// 从根到叶子节点路径 1->2 代表数字 12.
// 从根到叶子节点路径 1->3 代表数字 13.
// 因此，数字总和 = 12 + 13 = 25.
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(3)
n1.left = n2
n1.right = n3
const help = (root, preNum) => {
  if (root === null) {
    return 0;
  }
  const sum = preNum * 10 + root.val;
  if (root.left === null && root.right === null) {
    return sum;
  } else {
    return help(root.left, sum) + help(root.right, sum);
  }
}
var sumNumbers = function (root) {
  return help(root, 0);
};

console.log(sumNumbers(n1));