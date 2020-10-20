// 思路：就是用栈这个数据结构解决问题
// 遍历字符串遇到 # 的时候弹出栈顶元素 反之就压入栈中
// 处理完之后再比较两个字符串是否相等
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return compare(S) === compare(T)
}

const compare = (str) => {
  let stack = [];
  for (const iterator of str) {
    if (iterator === '#') {
      stack.pop();
    } else {
      stack.push(iterator)
    }
  }
  return stack.join('');
}
