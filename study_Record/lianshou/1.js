// length = 10

// function fn () {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   }
// };
// obj.method(fn, 1);



// val = 1;
// var obj = {
//     val: 2,
//     dbl: function () {
//         this.val *= 2; 
//         val *= 2;
//         console.log('val:', val);
//         console.log('this.val:', this.val);
//     }
// };

//  // 说出下面的输出结果
//  obj.dbl();
//  var func = obj.dbl;
//  func();

//  解析：

// 执行 obj.dbl(); 时， this.val 的 this 指向 obj，而下一行的 val 指向 window。所以，由 window.val 输出 2，obj.val 输出 4 。
// 最后一行 func(); 的调用者是 window。 所以，现在的 this.val 的 this 指向 window。
// 别忘了刚才的运算结果，window.val 已经是 2 了，所以现在 this.val *= 2; 的执行结果就是 4。
// val *= 2; 的执行结果，就是 8 了。 所以，最终的结果就是输出 8 和 8 。


var arrayLike = {
  0: 'OB',
  1: 'Koro1',
  length: 2
}
Array.prototype.push.call(arrayLike, 'jing', 'hao');
console.log(arrayLike) // {"0":"OB","1":"Koro1","2":"添加元素1","3":"添加元素2","length":4}


