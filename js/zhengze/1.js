let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}'; //待编译的模版

let data = {
    name: '蔡徐坤',
    age: 18,
    sex: "未知"
}

function render(template, data) {
    const reg = /\{\{(\w+)\}\}/; //不做贪婪匹配
    if (reg.test(template)) { //退出条件
        //是否需要翻译
        //vue 源码里模板编译用的正则方法
        const key = reg.exec(template)[1];
        console.log(key);
        template = template.replace(reg, data[key]);
        return render(template, data); //递归
    }
    return template;
    // 用什么方法？ 
    // 正则 + replace {{}} 规则
    // 1. {{(?)+}}
    // 2. $1   data[key] 
    // 3. replace 替换
}
console.log(render(template, data));

// 代码14行 exec()方法 详解
// 如果 exec() 找到了匹配的文本，则返回一个结果数组。
// 否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本             本例中的{{name}}
// 第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话）   本例中的name
// 第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话）
// 以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。
// index 属性声明的是匹配文本的第一个字符的位置。
// input 属性则存放的是被检索的字符串 string。我们可以看得出
// 在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。