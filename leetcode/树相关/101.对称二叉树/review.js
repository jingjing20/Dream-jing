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
  function help(left, right) {
    if (!left && !right) return true
    if (left && right) {
      return left.val === right.val && help(left.left, right.right) && help(left.right, right.left)
    }
    return false
  }
  return root ? true : help(root.left, root.right)
}

console.log(isSymmetric(n1))
