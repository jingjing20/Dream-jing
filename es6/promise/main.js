const fs = require('fs');

// fs.readFile('./d.txt', function(err,res){
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(res);
//     console.log(res.toString());
// })

function readFile() {
    const aFile = fs.readFile('./a.txt');
    console.log(aFile);
    const bFile = fs.readFile('./b.txt');
    console.log(bFile);
    const cFile = fs.readFile('./c.txt');
    console.log(cFile);
}
readFile();
