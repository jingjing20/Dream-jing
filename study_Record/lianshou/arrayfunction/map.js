let answer = 'C'
let options = [
  { code: 'A', name: 'I am A', value: 'I am jing A' },
  { code: 'B', name: 'I am B', value: 'I am jing B' },
  { code: 'C', name: 'I am C', value: 'I am jing C' }
]

let map = {}
for (let i = 0; i < options.length; i++) {
  let item = options[i]
  if (!map[item.code]) {
    map[item.code] = { ...item }
  }
}

console.log(map)