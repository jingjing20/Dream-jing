// 1、简单接口
interface jingvalue {
  jing: string
}

function printlabel(labeljing: jingvalue) {
  console.log(labeljing.jing)
}

let myjing = { jing: 'jingjingaihaohao' }

printlabel(myjing)

// 2、可选属性 color?: string,
interface Square {
  color: string,
  area: number
}
interface SquareConfig {
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'red', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
console.log(createSquare({ width: 60 }))

// 3、只读属性
interface Point {
  readonly x: number,
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 10   //Cannot assign to 'x' because it is a read-only property.ts(2540)

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// a = ro //类型“readonly number[]”中的索引签名仅允许读取。ts(2542)

