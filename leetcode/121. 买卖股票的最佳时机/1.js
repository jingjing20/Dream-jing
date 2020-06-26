//思路：
// 定义一个存放最小值的变量 min 初始化最大利润 profit = 0
// 开始遍历数组，如果当前遍历元素的值小于 min 更新 min。
// 否则用当前遍历元素的值减去 min 得到 profit 和当前 profit 取最大值

var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      profit = Math.max(profit, prices[i] - min)
    }
  }
  return profit
}

console.log(maxProfit([7, 4, 5, 3, 6, 4, 9]))