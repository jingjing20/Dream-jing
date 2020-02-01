// 利用对象属性存在的特性，如果没有该属性则存入新数组。

function unique(arr) {
    var newArr = []
    var obj = {} //对象字面量
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(unique([1, 3, 5, 5, 6, 8, 8, 9]))