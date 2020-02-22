function jingjing(sName) {
    return sName.replace(/-[a-z]/g, function(a) { //回调函数中第一个参数为查找出来的字符串 第二个为索引(如果有)
        return a.replace('-', '').toUpperCase();
    });
}

console.log(jingjing('jing-jing-hao-hao'))

// function cssStyle2DomStyle(sName) {
//     // var arr=sName.replace(/^-/,'')
//     // console.log(arr)
//     arr = sName.split('-'); //利用反向思维：直接匹配提取所有的字符子串，var arr=sName.match(/^\w+/g);
//     console.log(arr)
//     for (var i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].replace(/^\w/, function(ele) {
//             return ele.toUpperCase();
//         })
//     }
//     return arr.join('');
// }

// console.log(cssStyle2DomStyle('jing-jing-hao-hao'))