var a = {
  name: "bytedance",
  func: function () {
    console.log(this.name);
  },
};
a.func();
var fun1 = a.func;
fun1();
a.func.call({ name: "toutiao" });