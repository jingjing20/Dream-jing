const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  setTimeout(() => {
    res.end('hello')
  }, 3000)
})

server.listen(1234, () => {
  process.title = 'jingjing';
  console.log('进程id:', process.pid)
})
