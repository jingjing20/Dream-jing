const fs = require('fs');

const jing = async function readFile() { 
    const aFile = await fs.readFile('./a.txt');
    console.log(aFile);
    const bFile = await fs.readFile('./b.txt');
    console.log(bFile);
    const cFile = await fs.readFile('./c.txt');
    console.log(cFile);
}
jing();
