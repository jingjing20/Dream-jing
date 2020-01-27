- 注意：在 HTML 文档完全加载后使用 document.write() 将删除所有已有的 HTML 

- 提示：把脚本置于 <body> 元素的底部，可改善显示速度，因为脚本编译会拖慢显示。

- JavaScript 能够改变 HTML 样式 (CSS)
	改变 HTML 元素的样式，是改变 HTML 属性的一种变种：
		document.getElementById("demo").style.fontSize = "25px";

- 提示：以分号结束语句不是必需的，但我们仍然强烈您这么做。

- 所有 JavaScript 标识符对大小写敏感。
	变量 lastName 和 lastname，是两个不同的变量。

- JavaScript 程序员倾向于使用以小写字母开头的驼峰大小写：
	firstName, lastName, masterCard, interCity

- 提示：在用于字符串时，+ 运算符被称为级联运算符。
	+= 赋值运算符也可用于相加（级联）字符串：
	相加两个数字，将返回和，但对一个数字和一个字符串相加将返回一个字符串

在 JavaScript 中，没有值的变量，其值是 undefined。typeof 也返回 undefined。

	空值与 undefined 不是一回事。

	空的字符串变量既有值也有类型。      var car = "";                // 值是 ""，类型是 "string"


Null

	在 JavaScript 中，null 是 "nothing"。它被看做不存在的事物。

	不幸的是，在 JavaScript 中，null 的数据类型是对象。

	您可以把 null 在 JavaScript 中是对象理解为一个 bug。它本应是 null。

	
	Undefined 与 Null 的区别

	Undefined 与 null 的值相等，但类型不相等：

	typeof undefined              // undefined
	typeof null                   // object
	null === undefined            // false
	null == undefined             // true

typeof 运算符把数组返回为 "object"，因为在 JavaScript 中数组即对象。

# charCodeAt() 与 charAt()
    charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
    方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。

    var jing = "abc";
    var hao = jing.charCodeAt(0);
    console.log(hao)    结果为97
    var a = jing.charAt(0)
    console.log(a)      结果为 a

# js中数组去重
- 先将原数组排序，在与相邻的进行比较，如果不同则存入新数组
- indexOf()方法 利用数组的 indexOf 下标属性来查询 不在数组中的元素就push
- 利用对象属性存在的特性，如果没有该属性则存入新数组。
- 利用数组原型对象上的includes方法  没包括就push

# 数组用 join 可以变成字符串
ex:  [1,2,3,4].splice(0,2).join('') = "12"


# splice() slice()切割数组的区别

- splice
    // 不传参 返回空数组
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.splice()) // []
        console.log(arr) //  [1,2,3,4,5]
    }

    // 一个参数 从当前序列号开始截取到数组尾部 返回截取到的数组 原数组此时为空数组了
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.splice(0)) // [1,2,3,4,5]
        console.log(arr) // []
    }

    // 两个参数 从当前序列号开始，截取指定元素的个数 返回截取的元素数组，原数组改变为剩下的元素的数组
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.splice(0, 2)) // [1,2]
        console.log(arr) // [3,4,5]
    }

    // 多个参数 从第一个参数的序列号开始，删除几个元素，然后再删除的位置，将剩下的参数插入
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.splice(0, 2, 8, 9)) // [1,2]
        console.log(arr) // [8,9,3,4,5]
    }

- slice
    // 不传参 返回原数组
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.slice()) // [1, 2, 3, 4, 5]
        console.log(arr) // [1, 2, 3, 4, 5]
    }

    // 传一个参数 从当前序号开始切到数组尾部
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.slice(2)) // [3,4,5]
        console.log(arr) // [1, 2, 3, 4, 5]
    }

    // 传两个参数 第一个参数从当前序号开始切到 第二个参数，左闭右开，第二个参数的序列号不切
    {
        let arr = [1, 2, 3, 4, 5]
        console.log(arr.slice(2, 4)) // [3,4]
        console.log(arr) // [1, 2, 3, 4, 5]
    }

    
    





    
