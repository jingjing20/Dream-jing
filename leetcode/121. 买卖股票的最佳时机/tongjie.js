/**
 * 
 * @param {Array} prices 
 */
var maxProfit = function (prices) {
  let profit_out = 0;   // 本次卖出的利润
  let profit_in = -prices[0];   // 上一次卖出的利润
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    profit_in = Math.max(profit_in, - prices[i]);
    profit_out = Math.max(profit_out, profit_in + prices[i]);
  }
  return profit_out;
};
console.log(maxProfit([7, 4, 5, 3, 6, 4, 9]));