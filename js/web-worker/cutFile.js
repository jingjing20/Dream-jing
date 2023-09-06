export const cutFile = async (file) => {
    return new Promise((resolve, reject) => {
        // 规定每次切片的文件大小
        const CHUNK_SIZE = 1024 * 1024 * 5; // 5MBå
        // 定义线程数量
        // 获取核心线程的数量
        const THREAD_COUNT = navigator.hardwareConcurrency || 4; // 4个线程
        console.log(navigator.hardwareConcurrency);
        let result = [];
        // 计算文件的切片数量
        const chunks = Math.ceil(file.size / CHUNK_SIZE);
        // 计算每一个线程需要处理的切片数量
        const workerChunkCount = Math.ceil(chunks / THREAD_COUNT);
        let finishCount = 0; // 完成的线程数量

        // 生成每一个切片, 分片是耗时的所以是异步操作
        //   for (let i = 0; i < chunks; i++) {
        //     const chunk = await createChunks(file, i, CHUNK_SIZE);
        //     // 等待分片完成, 就可以拿到这一个分片的信息
        //     result.push(chunk);
        //   }
        //   return result;
        // 创建新的线程
        for (let i = 0; i < THREAD_COUNT; i++) {
            const worker = new Worker('./worker.js', {
                type: 'module',
            });
            //   const worker = new Worker(worderPath)
            // 计算每个线程的开始索引和结束索引
            const startIndex = i * workerChunkCount;
            let endIndex = startIndex + workerChunkCount;
            // 防止最后一个线程结束索引大于文件的切片数量的总数量
            if (endIndex > chunks) {
                endIndex = chunks;
            }
            worker.postMessage({
                file,
                CHUNK_SIZE,
                startIndex,
                endIndex,
            });

            worker.onmessage = (e) => {
                // 接收到 worker 线程返回的消息
                for (let i = startIndex; i < endIndex; i++) {
                    result[i] = e.data[i - startIndex];
                }
                worker.terminate();
                finishCount++;
                if (finishCount === THREAD_COUNT) {
                    // 所有线程都完成了
                    // 通知主线程
                    //   console.log(result);
                    resolve(result);
                }
            };
        }
    });
};
