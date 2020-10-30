
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root;
  }
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (i < len - 1) {
        node.next = stack[0];
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }
  }
  return root;
};