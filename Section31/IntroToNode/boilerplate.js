const fs = require('fs');
// console.log(fs);

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK");
//     if (err) throw err;
//   });

let dirName = process.argv[2] || 'Project';

try {   
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, '');
    fs.writeFileSync(`${dirName}/styles.css`, '');
    fs.writeFileSync(`${dirName}/script.js`, '');

    console.log("AFTER THE MKDIR");
} catch(e) {
    console.log('SOmething went wrong! ', e);
}