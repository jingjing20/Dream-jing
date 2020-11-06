// 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典中的单词。
// 说明:

// 如果不存在这样的转换序列，返回 0。
// 所有单词具有相同的长度。
// 所有单词只由小写字母组成。
// 字典中不存在重复的单词。
// 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-ladder
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }
  const wordSet = new Set(wordList);
  let quene = [];
  quene.push([beginWord, 1]);
  while (quene.length) {
    const [word, time] = quene.shift();
    if (word === endWord) {
      return time;
    }
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j < 122; j++) {
        const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          quene.push([newWord, time + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
