function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

a1 = new TreeNode(1);
a2 = new TreeNode(2);
a3 = new TreeNode(3);
a1.left = a2;
a1.right = a3;
a4 = new TreeNode(4);
a5 = new TreeNode(5);
a2.left = a4;
a2.right = a5;
a6 = new TreeNode(6);
a7 = new TreeNode(7);
a3.left = a6;
a3.right = a7;

var inorderTraversal = function(root) {
  let arr = [];
  const inorder = root => {
    if(root === null) return null;    //退出条件
    arr.push(root.val);
    inorder(root.left);
    inorder(root.right);
  }
  inorder(root);    //递归方法
  return arr;
}

console.log(inorderTraversal(a1));