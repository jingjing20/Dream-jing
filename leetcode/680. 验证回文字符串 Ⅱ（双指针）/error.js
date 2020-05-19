var validPalindrome = function (s) {
  let newStr = s.split('')
  let resObj = {}
  let result = []
  for (let i = 0; i < newStr.length; i++) {
    if (!resObj[newStr[i]]) {
      resObj[newStr[i]] = 1
      result.push(newStr[i])
    } else {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === newStr[i]) {
          result.splice(j, 1)
        }
      }
    }
  }
  return result.length > 2 ? false : true
};

console.log(validPalindrome('abca'))