// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

// 思路：深度优先遍历法
// 双重 for 循环遍历每个元素 如果是 1，就从此位置开始深度优先遍历所有的 1 把其置为 0。 res 加一，即海岛加一。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;  //结果
  const rows = grid.length;  //二维数组的长度
  if (rows === 0) return 0;
  const cols = grid[0].length;  //每个子数组的长度
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        helper(grid, i, j, rows, cols);
        res++;
      }
    }
  }
  return res
};

// 定义一个辅助函数 helper()
function helper(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0") return
  grid[i][j] = "0";
  helper(grid, i - 1, j, rows, cols)
  helper(grid, i + 1, j, rows, cols)
  helper(grid, i, j - 1, rows, cols)
  helper(grid, i, j + 1, rows, cols)
}
let jing = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
console.log(numIslands(jing))