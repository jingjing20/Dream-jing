// 先序遍历：中，左，右
const TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7
    }
  }
};

// 递归方式的先序遍历方法
var preOrderRecur = function(root){

  var list = [];
  var preOrder = function(root){
    if(root === undefined){
      return root;
    }
    list.push(root.val)
    preOrder(root.left);
    preOrder(root.right);
  }
  preOrder(root);
  return list;
};

// 非递归方式的先序遍历方法
var preOrder = function(TreeNode){
  var list = [];
  let stack = [TreeNode];
  while(stack.length !== 0){
    const cur = stack.pop();
    const right = cur.right;
    const left = cur.left;
    list.push(cur.val);

    if(right){
      stack.push(right);
    }
    if(left){
      stack.push(left);
    }
  }
  return list;
  
  
}


var list = preOrderRecur(TreeNode);
console.log('递归前序遍历', list);

var listUnRecur = preOrder(TreeNode);
console.log('非递归前序遍历', listUnRecur);

// [1, 2, 4, 5, 3, 6, 7]