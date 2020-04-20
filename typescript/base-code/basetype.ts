let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

// null 和 undefined 是所有类型的子类型
let num: number = undefined

// any类型
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'abc'

// 数组类型
let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

// 元组
let user: [string, number] = ['viking', 1]