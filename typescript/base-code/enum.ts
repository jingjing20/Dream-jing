//枚举类型

enum Color {
  Red = 1,
  Green = 2,
  blue = 3
}

let colorName: string = Color[2]

console.log(colorName)

// 编译后js如下

// var Color;
// (function (Color) {
//     Color[Color["Red"] = 1] = "Red";
//     Color[Color["Green"] = 2] = "Green";
//     Color[Color["blue"] = 3] = "blue";
// })(Color || (Color = {}));
// var colorName = Color[2];
// console.log(colorName);
