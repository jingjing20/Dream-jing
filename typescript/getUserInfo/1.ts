const getUserInfo1 = function (user: { name: string, age: number }) {
  return `name: ${user.name},age: ${user.age}`
}

console.log(getUserInfo1({ name: "jing", age: 20 }))