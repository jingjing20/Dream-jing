-   `decodeURIComponent()`
    decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。

-   `URLSearchParams` 对象
    URLSearchParams 提供了一组标准的 API 方法，通过他们可以对查询字符串进行一系列操作。

```js
let qs = '?q=javascript&num=10';

let searchQuery = new URLSearchParams(qs);

console.log(searchQuery.toString()); //jing-log     q=javascript&num=10
console.log(searchQuery.has('num')); //jing-log     true
console.log(searchQuery.get('num')); //jing-log     10
searchQuery.set('jing', 'baobei');
searchQuery.delete('num');
console.log(searchQuery.toString()); //jing-log     q=javascript&jing=baobei

// 大多数支持 URLSearchParams 的浏览器也支持将 URLSearchParams 的实例用作可迭代对象：
for (let param of searchQuery) {
	console.log(param); //jing-log                  [ 'q', 'javascript' ][ 'jing', 'baobei' ]
}
```

-   导航方法有以下三种，都有同样的效果，最常用的是 `location.href`。

```js
location.assign('https://www.jinghao.com');
window.location = 'https://www.jinghao.com';
location.href = 'https://www.jinghao.com';
```

-   **除了 hash 之外，只要修改 location 的一个属性，就会导致页面重新加载新的 URL。 修改 hash 也会在浏览器的历史中添加一条新记录**

-   上面提到的导航方法修改 url 之后都会在浏览器的历史中添加一条新记录，如果不想增加新纪录，可以使用 location.replace() 方法。这个方法接收一个 URL 参数，但是重新加载后不会添加历史记录。用户不能返回上一页。

-   还有一个修改地址的方法是 reload()，他能重新加载当前页面。
    调用 reload()而不传参数，页面会以最有效的方式重新加载。
    也就是说，如果页面自上次请求以来 没有修改过，浏览器可能会从缓存中加载页面。
    **如果想强制从服务器重新加载，可以像下面这样给 reload()传个 true:**

```js
location.reload(); // 重新加载，可能是从缓存加载
location.reload(true); // 重新加载，从服务器加载
```
