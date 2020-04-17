var rotate = function (matrix) {
  // 转序倒置
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      ([matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]])
    }
  }
  return matrix
  matrix.forEach(row => row.reverse());
  return matrix
};


console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))