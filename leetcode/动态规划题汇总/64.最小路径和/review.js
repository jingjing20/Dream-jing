/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(i !== 0 && j !== 0) {
        grid[i][j] = grid[i][j] + Math.min(grid[i-1][j],grid[i][j-1])
      } else if(i !== 0 && j == 0) {
        grid[i][j] = grid[i][j] + grid[i-1][j]
      } else if(i == 0 && j !== 0) {
        grid[i][j] = grid[i][j] + grid[i][j-1]
      } else {
        continue
      }
    }
  }
  return grid[grid.length-1][grid[0].length-1]
};

console.log(minPathSum([
  [1,3,1,2],
  [1,5,1,4],
  [4,2,1,6]
]))