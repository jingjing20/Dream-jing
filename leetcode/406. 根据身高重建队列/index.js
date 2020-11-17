// 假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，
// 其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/queue-reconstruction-by-height
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  let ans = [];
  for (let i = 0; i < people.length; i++) {
    ans.splice(people[i][1], 0, people[i])
  }
  return ans;
};

let arr = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(reconstructQueue(arr));
// 输入:
// [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
// 输出:
// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]
