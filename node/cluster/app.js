const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'cintent-type': 'text/html' });
        res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
    })
    .listen(1314, () => {
        console.log('listened 1314')
    })