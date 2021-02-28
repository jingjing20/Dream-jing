const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');

console.log(res2); //jing-log
