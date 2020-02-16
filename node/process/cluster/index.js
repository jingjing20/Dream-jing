const http = require('http');

// 将我们的服务器充分利用起来
const numCPUS = require('os').cpus().length;

const cluster = require('cluster');

if (cluster.isMaster) {
  //主进程 调度子进程 不需要为我们的响应服务
  for (let i = 0; i < numCPUS; i++) {
    cluster.fork();
  }
}else {
  http.createServer((req,res) => {
    res.writeHead(200);
    res.end(`jingjing ${process.pid}`)
  }).listen(8000)
}