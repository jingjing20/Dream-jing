function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(2000).then((value) => {
  console.log(value);
});

// setTimeout(fn,time,param1,param2,...)
// fn：（必传）需要执行的函数
// time：（非必传）
// 传值时：倒计时time毫秒后执行fn
// 不传时：默认为0，fn在最早可得的空闲时间执行，在"任务队列"的尾部执行fn，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。
// param：（非必传）fn函数的参数
