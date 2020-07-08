const arr = [
  { age: 1 },
  { age: 5 },
  { age: 7 },
  { age: 5 }
]
let obj = {}, target = null, num = 0;
function findMax(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].age]) {
      obj[arr[i].age]++
    } else {
      obj[arr[i].age] = 1
    }
    if (obj[arr[i].age] > num) {
      num = obj[arr[i].age]
      target = arr[i].age
    }
  }
  return `${target}${num}`
}

console.log(findMax(arr));

