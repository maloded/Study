'use strict';

const fs = require('fs');

module.exports = async id => {
    const fileName = `./data/${parseInt(id)}.json`;
    const data = await fs.promises.readFile(fileName, 'utf-8');
    return JSON.parse(data);
}