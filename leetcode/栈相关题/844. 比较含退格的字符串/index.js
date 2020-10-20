// 在处理的过程中，可以借助 栈 这个数据结构来完成转换。顺序的遍历字符串，当字符串等于 # 时，将栈顶的字符串弹出；反之，将字符串压入栈中，即可。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return processed(S) === processed(T)
};
/**
* 定义处理字符串的函数
*/
const processed = (str) => {
  let stack = [];
  for(const val of str) {
      if (val === '#') {
          stack.pop();
      } else {
          stack.push(val);
      }
  }
  return stack.join('');
}