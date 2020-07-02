let arr = [
  [1, 2, 4],
  [1, 2, 3],
  [1, 3, 4],
  [1, 3, 2],
];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].join('');
}
arr = arr.sort((a, b) => a - b);
for (let j = 0; j < arr.length; j++) {
  arr[j] = arr[j].split('').map((item) => {
    return parseInt(item);
  });
}
console.log(arr);
