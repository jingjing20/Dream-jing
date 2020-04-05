var name = "windowsName";
var a = {
  name: "jingjing",
  fn: function () {
    console.log(this.name);      // windowsName
  }
}

const f = a.fn;
f();