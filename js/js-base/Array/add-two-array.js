let newArr = []
function addArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      addArray(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(addArray([[1, 2, 3], [4, 5]]))