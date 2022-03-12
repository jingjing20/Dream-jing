const fs = require('fs');

fs.stat('index.js', (err, stats) => {
  if (err) {
    console.log(err)
  } else {
    console.log(stats);
    console.log(`文件: ${stats.isFile()}`);
    console.log(`目录: ${stats.isDirectory()}`);
  }
})

// fs.mkdir('logs', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件创建成功');
//   }
// })

// fs.writeFile('logs/jing.log', 'haohao\n',(err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('文件写入成功！');
//   }
// })

// fs.appendFile('logs/jing.log', 'jingjing\n',(err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('文件写入成功！');
//   }
// })

// fs.readFile('logs/jing.log', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// })

// fs.readdirSync('logs').map((file) => {
//   fs.unlink(`logs/${file}`, (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(`成功删除了文件：${file}`)
//     }
//   })
// })

// fs.rmdir('logs', (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('成功删除了目录')
//   }
// })
