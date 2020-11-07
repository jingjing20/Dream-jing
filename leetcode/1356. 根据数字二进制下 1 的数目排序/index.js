/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const sortJing = (n) => {
    let count = 0;
    while (n != 0) {
      count += n & 1;
      n = n >> 1;
    }
    return count;
  }
  return arr.sort((a, b) => {
    return sortJing(a) - sortJing(b) || a - b;
  })
};
let arr = [0,1,2,3,4,5,6,7,8]
// let arr = [1024,512,256,128,64,32,16,8,4,2,1]
console.log(sortByBits(arr))