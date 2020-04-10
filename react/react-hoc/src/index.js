import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <button id="add">add</button>
    <button id="min">min</button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.onload = function () {
  const add = document.getElementById('add');
  const min = document.getElementById('min');
  const delay = 2000;
  // let prev = Date.now();
  add.onclick = throttle(function () {
    // let now = Date.now();
    // if (now - prev > delay) {
    console.log('jingjing')
    //   prev = now;
    // }
  }, delay)

  min.onclick = throttle(function () {
    // let now = Date.now();
    // if (now - prev > delay) {
    console.log('haohao')
    //   prev = now;
    // }
  }, delay)


  //节流函数
  function throttle(func, wait) {
    let prev = Date.now();
    // 里面这层函数才是返回给调用者执行的
    return function () {
      let now = Date.now();
      if (now - prev > wait) {
        func();
        prev = now;
      }
    }
  }
}