import TS from './ts/index.ts'  //  类型声明
// require('./style/index.css')
//引入css文件 webpack bundler 一切静态资源
//const  es6 -> es5  

new TS();

const h2 = document.createElement('h2');
h2.innerText = "终于看完了、可是还是啥也没看出来。。";
h2.className = 'wang';
//3 挂载点， html  template 
document.body.append(h2);
