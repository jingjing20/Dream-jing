
// 函数是js 里的一等公民 new Object()
// 函数构造函数来用的， 如何限制， 函数的调用方式一定是new  ? 
function Person(name) {
  // 差别， 函数还有其他的功能 this arguments super 
  if(new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用new 命令才能生成实例');
  }
} 
let lj = new Person('李广');
console.log(lj.name);
console.log(Person('李广'))// throw error
// {}
