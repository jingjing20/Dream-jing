- 数据可视化
- 使用requestAnimationFrame 请求运动帧
游戏开发中使用requestAnimationFrame 来代替setInterval()
  function animation() {
      console.log('jingjing');
      animation();  //递归  自己调用自己 内存泄漏
  }


  - canvas 是画布
    绘制API 画布的默认大小？
    canvas.style.width     标准的 样式的属性 100vw style中好多单位 所以这里一定要单位
    canvas.width    html 属性 不接受单位 只接受数值 
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.font="50px Verdana";
    ctx.fillText(2, 100, 100);
    requestAnimationFrame + clearRect