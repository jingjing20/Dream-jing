# material design 来自google 的UI风格
苹果 UI 受欢迎  拟物设计（乔布斯）  扁平化设计
安卓 （material design）

特别？
从css 风格 -》组件-> react入门

波浪的感觉？ 
- stylus -w index.styl -o index.css     styl编译css的命令
css ? 思路 
- material design 的灵魂 在于对交互的创新
  波浪感 进度条的进度感 
  移动端细节 cursor: pointer 用的是非button 组件
  user-select: none;
  stylus 嵌入式 ::after  :active::after

1. background-image
  背景图片 url 引入的方式， 在移动时代， 渐变也可以生成
  即生成了背景， 同时又没有用图片
  10% 白， 1%的透明（带来了仙气)，
  trsform: scale(12) 12->0

- 我们要做一堆的按钮
  为开发准备好基础组件 小程序里用过组件， 
  要用到的按钮， 这里都会有， warning? 大一些， 块一级， 
  提供 通用的， 变通的，各种常见要求(70%的业务开发) 就叫组件  
  自己写下这个组件， 以后用就好了， 复用。
  css 有些变化（状态， primary circle block ）， 如何变化封装进去？ 
  html 区别 
  1. 把它的样式封装进去
    button? 样式是样式 
    组件（组合html,css, js ）成为一个组件

- ReactDOM  React 跟DOM交互的库
  基本语法:
  组件是强大的， 定义了一个button组件
  type 文字 block ....有通用性的需求
  <Boyfriend />  <Girlfriend />
  1. ReactDOM.render( <div> <Button ></Button></div> , docuemnt.getElementById('root'))
    JSX语法  
    才可以在root 里面显示组件  组件 要编译  
  2. function Button(props) { //定义组件好方便
      let {    } = props
      return (
        <div></div> 
      )
    }
  3. 只要写一次， 以后要用按钮就它了...

  - pointer-events none 此样式可以使超链接不会跳转


