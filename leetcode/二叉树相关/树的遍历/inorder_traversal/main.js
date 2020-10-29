// 前序遍历
const preorderTraversal = (root) => {
  const list = [];
  const stack = [];
  
  // 当根节点不为空的时候，将根节点入栈
  if(root) stack.push(root)
  while(stack.length > 0) {
      const curNode = stack.pop()
      // 第一步的时候，先访问的是根节点
      list.push(curNode.val)
      
      // 我们先打印左子树，然后右子树
      // 所以先加入栈的是右子树，然后左子树
      if(curNode.right !== null) {
          stack.push(curNode.right)
      }
      if(curNode.left !== null) {
          stack.push(curNode.left)
      }
  }
  return list
}