const path = require('path'); //路径
const fse = require('fs-extra'); //fs扩展包

// 合并文件块
const UPLOAD_DIR = path.resolve(__dirname, ".", "target");
// resolve()方法可以返回路径
// console.log(UPLOAD_DIR)
const filename = 'yb';
const filePath = path.resolve(UPLOAD_DIR, "..", `${filename}.jpeg`);
// console.log(filePath)

const pipeStream = (path, writeStream) =>
    new Promise(resolve => {
        const readStream = fse.createReadStream(path);
        readStream.on("end", () => {
            resolve();
        })
        readStream.pipe(writeStream);
    })

const mergeFileChunk = async(filePath, filename, size) => {
    // console.log(filePath, filename, size)
    // 大文件上传时 每个要上传的文件 先以文件名为目录名 把分文件blob放入这个目录
    // node文件合并肯定是可以的 stream
    const chunkDir = path.resolve(UPLOAD_DIR, filename)
    const chunkPaths = await fse.readdir(chunkDir)
        // console.log(chunkPaths)
    chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1]);
    await Promise.all(
        chunkPaths.map((chunPath, index) => {
            pipeStream(
                path.resolve(chunkDir, chunPath),
                fse.createWriteStream(filePath, {
                    start: index * size,
                    end: (index + 1) * size
                })
            )
        })
    )
    console.log('文件读写成功！')
}

mergeFileChunk(filePath, filename, 0.5 * 1024 * 1024);