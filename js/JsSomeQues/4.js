// 利用数组原型对象上的includes方法。
function unique5(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(unique5([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));