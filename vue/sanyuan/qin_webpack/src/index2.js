import { template } from "lodash";

// const compiler = template('<h1><%= title %></h1>'); //设置为模板
// // ajax , RIA 
// const html = compiler({ title: 'My Component' })

// document.getElementById('app').innerHTML = html;

// 函数式组件
const MyComponent = props => {
  const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
  return compiler(props)
}

//优化手段
MyComponent.cache = null

document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })

setTimeout(() => {
  document.getElementById('app').innerHTML = MyComponent({ title: 'New MyComponent' })
}, 3000);