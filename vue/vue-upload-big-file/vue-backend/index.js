const http = require('http');
const fse = require('fs-extra');
const serve = http.createServer();

const Controller = require('./controller');

const controller = new Controller();

serve.on("request", async(req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")

    if (req.method === 'OPTIONS') {
        res.status = 200,
            res.end();
        return;
    }

    if (req.url == '/verify') {
        // res.end('verify');
        await controller.handleVerifyUpload(req, res)
    }
})

serve.listen(3000, () => {
    console.log("正在监听3000端口...");
})