function Cat (name, color) {
  var heart = '❤️'
  var stomach = '胃'
  var heartbeat = function () {
    console.log(heart + '跳')
  }
  this.name = name  
  this.color = color  
  this.jump = function () {    
    heartbeat() // 能跳起来表明这只猫是活的,心也就能跳    
    console.log('我跳起来了~来追我啊')  
  }
}

// 这段是新增的代码
Cat.descript = '我这个构造函数是用来生产出一只猫的'
Cat.actingCute = function () {  
  console.log('一听到猫我就想到了它会卖萌')
}

Cat.prototype.cleanTheBody = '我会用唾液清洁身体'   //原型链

var guaiguai = new Cat('guaiguai', 'white')

console.log(Cat.descript)
Cat.actingCute()
console.log(guaiguai.descript)
console.log(guaiguai.cleanTheBody)

// 这个构造函数是用来生产出一只猫的
// 一听到猫我就想到了它会卖萌
// undefined
// 我会用唾液清洁身体