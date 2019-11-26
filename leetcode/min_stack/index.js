const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列 先进先出     栈 先进后出
console.log(arr);

const jing = arr.pop();
arr.unshift(jing);
console.log(arr);

arr.unshift('苏荃');
console.log(arr);

const hao = arr.shift();
arr.push(hao);
console.log(arr);