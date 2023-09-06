import SparkMD5 from './md5.js';

export const createChunks = (file, index, chunkSize) => {
    return new Promise((resolve, reject) => {
        // 开始第几个*分片的大小
        const start = index * chunkSize;
        //   结束时start + 分片的大小
        const end = start + chunkSize;
        const fileReader = new FileReader();
        const spark = new SparkMD5();
        // 读取文件的分片 读取完成后触发onload事件
        fileReader.onload = (e) => {
            // const spark = Md5(e.target.result)
            spark.append(e.target.result);
            const files = file.slice(start, end);
            resolve({
                start,
                end,
                index,
                hash: spark.end(),
                files,
            });
        };
        // 读取文件的分片
        fileReader.readAsArrayBuffer(file.slice(start, end));
    });
};
