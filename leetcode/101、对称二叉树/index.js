/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(2)
const n4 = new TreeNode(3)
const n5 = new TreeNode(4)
const n6 = new TreeNode(4)
const n7 = new TreeNode(3)
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6
n3.right = n7

var isSymmetric = function (root) {
  const help = (left, right) => {
    if (!left && !right) return true  //左右子树都为空也算对称
    if (left && right) {
      // 左右子树都存在时比较他们值是否相等，再递归调用下去。
      return left.val === right.val && help(left.left, right.right) && help(left.right, right.left)
    }
    return false  //如果左右子树一个存在一个不存在 不对称
  }
  return !root || help(root.left, root.right)  //根节点 root 为空也是属于对称的 不为空就调用 help 函数开始判断
};

console.log(isSymmetric(n1))
