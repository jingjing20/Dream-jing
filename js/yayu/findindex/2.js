'use strict'
//predicate代表条件函数
// 返回合条件的元素下标 如果没有返回-1
function findIndex(array, predicate, context) {
    for (var i = 0; i < array.length; i++) {
        if (predicate.call(context, array[i], i)) {
            return i
        }
    }
    return -1
}

// 函数作为参数 JS里函数就是一等对象
console.log(findIndex([1, 2, 3, 4], function(item, i) {
    console.log(this)
    if (item == 3) return true;
}, [1, 2, 3, 4]));