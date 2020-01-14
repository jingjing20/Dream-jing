function removeDuplicates(arr) {
    const size = arr.length
        // 定义一个常量获取数组长度可以减少编译时的开销
    let showP = 0 //慢指针
    for (let fastP = 0; fastP < size; fastP++) {
        if (arr[fastP] !== arr[showP]) {
            showP++;
            arr[showP] = arr[fastP]
        }
    }
    return showP + 1
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3, 4, 5, 5]))