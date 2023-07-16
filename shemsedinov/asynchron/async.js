const fs = require('node:fs');

const files = ['./callback/emulate.js', './callback/simpleCallback.js', 'file.js'];

const promises = files.map((path) => new Promise((resolve, reject) => 
  fs.lstat(path, (err, stat) => {
    if (err) reject(err);
    else resolve(stat);
  })
))

Promise.allSettled(promises).then(console.dir);