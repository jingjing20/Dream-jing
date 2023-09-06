import { cutFile } from './cutFile.js';
fileRef.onchange = async (e) => {
    console.time('cutFile');
    // 获取文件
    const file = e.target.files[0];
    // 将文件进行切片
    const chunks = await cutFile(file);
    console.timeEnd('cutFile');
    console.log(chunks);
};
