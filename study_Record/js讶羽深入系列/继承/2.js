function test(person) {
  person.age = 26
  person = {
    name: 'hzj',
    age: 18
  }
  return person
}
const p1 = {
  name: 'fyq',
  ages: 19
}
// console.log(p1) // -> ?
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ?
