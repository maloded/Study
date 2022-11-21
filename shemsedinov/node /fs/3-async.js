const fs = require('fs');

fs.readFile('1-readFileSync.js', 'utf8', (err, buffer) => {
    if (err) {
        console.log(err);
        process.exit(0);
    };
    console.log('File size:', buffer.length);
    const src = buffer.toString();
    const lines = src.split('\n').filter(line => !!line);
    const context = lines.join('\n');
    fs.writeFile('1-readFileSync.txt', context, (err) => {
        if (err) {
            console.log(err);
            process.exit(0);
        };
        console.log('New file size:', context.length);
    });
});

console.log('Read file async example');

