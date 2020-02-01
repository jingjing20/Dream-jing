// 利用数组的 indexOf 下标属性来查询

function unique(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) { //indexOf求数组中元素的索引
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(unique([1, 2, 2, 3, 3, 4, 5, 5, 9, 9, 8]))