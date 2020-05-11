const EventEmitter = require('events');

class Player extends EventEmitter { }

var player = new Player();

// player.on('play', (jing) => {
//   console.log(`正在播放: 《${jing}》`);
// })
player.once('play', (jing) => {
  console.log(`正在播放: 《${jing}》`);
})

player.emit('play', '理想');
player.emit('play', '海阔天空');