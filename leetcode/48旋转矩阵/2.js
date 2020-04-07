/**
 * 
 * @param {Array} hao 
 */
function jing(hao) {
  let n = hao.length;
  let newhao = hao;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newhao[j][n - i - 1] = hao[i][j];
    }
  }
  hao = newhao;
  return hao;
}

console.log(jing([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]))