import { createChunks } from './createChunks.js';

onmessage = async (e) => {
    const arr = [];
    const { file, CHUNK_SIZE, startIndex, endIndex } = e.data;
    // console.log(file, CHUNK_SIZE, startIndex, endIndex);
    for (let i = startIndex; i < endIndex; i++) {
        // const chunk = await createChunks(file, i, CHUNK_SIZE)
        // postMessage(chunk)
        arr.push(createChunks(file, i, CHUNK_SIZE));
    }
    const chunks = await Promise.all(arr);
    // 提交线程信息
    postMessage(chunks);
};
