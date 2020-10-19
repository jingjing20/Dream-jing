// 思路：采用栈数据结构来处理字符串 遍历字符串 如果是 # 就 pop() 反之一直往里push()
// 处理完后的再比较是否相同 

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