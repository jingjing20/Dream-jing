var sortString = function(s) {
    var h = [], i, r = [] // 不定数组长度，由 s 中unicode编码最大字节决定。数组很大时，定好长度性能更好
    for (var v of s) h[i = v.charCodeAt() - 97] = (h[i] || 0) + 1 // unicode编码顺序 = 数组索引顺序
    while(r.length < s.length) { // 直到 结果数组长度 = 字符串长度 结束
        for (i = 0; i < h.length; i++) // 顺序遍历，从小到大选
            if(h[i]) r.push(i + 97), h[i]-- // 选一个字节，unicode编码放结果集，出现次数 - 1
        while (i--) // 相当于i = h.length; i--; 倒序遍历，从大到小选
            if(h[i]) r.push(i + 97), h[i]--
    }
    return String.fromCharCode(...r) // 将数组展开为逗号分隔的实参，批量转回字符
};
