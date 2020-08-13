/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let rows = board.length;
  if(rows === 0) return;
  let cols = board[0].length;
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if (i === 0 || i === rows -1 || j === 0 || j === cols -1) {
        if(board[i][j] === 'O') {
          helper(board,i,j,rows,cols)
        }
      }
    }
  }

  function helper(board,i,j,rows,cols) {
    if(i < 0 || i == rows || j < 0 || j == cols) return;
    if(board[i][j] === 'O') {
      board[i][j] = 'NO';
      helper(board, i + 1, j, rows, cols);
      helper(board, i - 1, j, rows, cols);
      helper(board, i, j - 1, rows, cols);
      helper(board, i, j + 1, rows, cols);
    }
  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if(board[i][j] === 'NO') {
        board[i][j] = 'O'
      } else if(board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
  return board;
};

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))