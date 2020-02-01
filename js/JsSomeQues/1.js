// 思路：先将原数组排序，在与相邻的进行比较，如果不同则存入新数组。
function unique(arr) {
    var fomArr = arr.sort()
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fomArr[i] !== fomArr[i - 1]) {
            newArr.push(fomArr[i])
        }
    }
    return newArr
}

console.log(unique([1, 3, 3, 5, 5, 9, 8]))