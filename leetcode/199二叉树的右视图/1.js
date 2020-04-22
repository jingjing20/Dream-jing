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
const n3 = new TreeNode(3)
const n4 = new TreeNode(4)
const n5 = new TreeNode(5)
const n6 = new TreeNode(6)
const n7 = new TreeNode(7)
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6
n4.right = n7

var rightSideView = function (root) {
  if (!root) return []
  let res = []
  jing(root, 0, res)
  return res
}

function jing(root, step, res) {
  if (root) {
    if (step === res.length) {        //当数组长度等于深度时把当前的值push进去
      res.push(root.val)
    }
    console.log(step, root.val, res)
    jing(root.right, step + 1, res)   //提前加一
    jing(root.left, step + 1, res)    //提前加一
  }
}

console.log(rightSideView(n1))